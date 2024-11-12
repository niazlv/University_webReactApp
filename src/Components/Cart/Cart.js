import React, { useState, useEffect } from 'react';
import './Cart.css';
import { getCartItems, removeFromCart } from '../server/CartService';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const items = await getCartItems();
      setCart(items);
    };
    fetchCart();
  }, []);

  const handleRemoveFromCart = async (plan) => {
    await removeFromCart(plan);
    setCart(await getCartItems());
  };

  const handlePurchase = () => {
    navigate('/checkout');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="Cart">
      {cart.length !== 0 ? (
        <Link to="/catalog" className="back-to-catalog-button">Перейти в каталог</Link>
      ) : ""}
      <header className="Cart-header">
        <h1>Корзина</h1>
        {cart.length === 0 ? (
          <div>
            <p>Корзина пуста</p>
            <br />
            <Link to="/catalog" className="back-to-catalog-button">Перейти в каталог</Link>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Длительность: {item.duration_days} дней</p>
                  <p>Цена: ${item.price}</p>
                  <p>Количество: {item.quantity}</p>
                  <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>Удалить</button>
                </div>
              ))}
            </div>
            <br />
            <div className="cart-summary">
              <h2>Общая сумма: ${total}</h2>
              <button className="purchase-button" onClick={handlePurchase}>Купить</button>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Cart;
