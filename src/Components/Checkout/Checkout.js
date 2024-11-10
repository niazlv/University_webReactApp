import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';


function Checkout() {
    const navigate = useNavigate();
  return (
    <div className="Checkout">
      <header className="Checkout-header">
        <h1>Форма оплаты</h1>
        {/* Здесь можно добавить поля для ввода платежной информации */}
        <p>Страница для ввода платежной информации.</p>
        <button className="back-to-catalog-button" onClick={() => navigate("/")}>Вернуться на главную страницу</button>
      </header>
    </div>
  );
}

export default Checkout;
