import React, { useState } from 'react';
import './Catalog.css';
import {addToCart, removeFromCart, isInCart } from "../server/CartService"
import { Link } from 'react-router-dom';

const vpnServers = [
    { country: 'Россия', speed: '100 Мбит/с', traffic: 'Неограниченно', price: 5 },
    { country: 'США', speed: '200 Мбит/с', traffic: '500 ГБ', price: 10 },
    { country: 'Германия', speed: '150 Мбит/с', traffic: '200 ГБ', price: 8 },
    { country: 'Канада', speed: '250 Мбит/с', traffic: '300 ГБ', price: 12 },
    { country: 'Япония', speed: '300 Мбит/с', traffic: 'Неограниченно', price: 15 },
  ];

  function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState(() => vpnServers.map(server => isInCart(server)));
  
    const handleAddToCart = (server, index) => {
      addToCart(server);
      const newCart = [...cart];
      newCart[index] = true;
      setCart(newCart);
    };
  
    const handleRemoveFromCart = (server, index) => {
      removeFromCart(server);
      const newCart = [...cart];
      newCart[index] = false;
      setCart(newCart);
    };
  
    const filteredServers = vpnServers.filter(server =>
      server.country.toLowerCase().includes(searchTerm.toLowerCase())
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
              <div key={index} className="vpn-item">
                <h2>{server.country}</h2>
                <p>Скорость: {server.speed}</p>
                <p>Доступный трафик: {server.traffic}</p>
                <p>Цена: {server.price}$</p>
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




  