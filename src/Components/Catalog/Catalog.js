import React, { useState, useEffect } from 'react';
import './Catalog.css';
import { addToCart, removeFromCart, isInCart } from "../server/CartService";
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:8080'; // Убедитесь, что URL соответствует вашему бэкенду

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [vpnServers, setVpnServers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`${BASE_URL}/get_plans.php`);
        const data = await response.json();
        if (data.plans) {
          setVpnServers(data.plans);
          const cartStatus = await Promise.all(data.plans.map(plan => isInCart(plan)));
          setCart(cartStatus);
        } else {
          console.error('Не удалось получить планы');
        }
      } catch (error) {
        console.error('Ошибка при получении планов:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleAddToCart = async (server, index) => {
    await addToCart(server);
    const newCart = [...cart];
    newCart[index] = true;
    setCart(newCart);
  };

  const handleRemoveFromCart = async (server, index) => {
    await removeFromCart(server);
    const newCart = [...cart];
    newCart[index] = false;
    setCart(newCart);
  };

  const filteredServers = vpnServers.filter(server =>
    server.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Catalog">
      <Link to="/cart" className="go-to-cart-button">Перейти в корзину</Link>
      <header className="Catalog-header">
        <h1>Каталог VPN-серверов</h1>
        <input
          type="text"
          placeholder="Поиск по странам"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="vpn-list">
          {filteredServers.map((server, index) => (
            <div key={server.plan_id} className="vpn-item">
              <h2>{server.name}</h2>
              <p>{server.description}</p>
              <p>Длительность: {server.duration_days} дней</p>
              <p>Цена: ${server.price}</p>
              {cart[index] ? (
                <button className="remove-button" onClick={() => handleRemoveFromCart(server, index)}>Удалить из корзины</button>
              ) : (
                <button className="add-button" onClick={() => handleAddToCart(server, index)}>Добавить в корзину</button>
              )}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Catalog;
