import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faRocket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import '../css/header.css';

class Header extends React.Component {
    static defaultProps = {
        userstate: null,
    };
    render(){
        const isLoggedIn = this.props.userstate && this.props.userstate._id;
        console.log(this.props.userstate);
        console.log(isLoggedIn);

        return (
            <header>
            <div className='left'>
                <div className='logo'>
                <img src={logo} alt="Logo" />
                <div className='logo-text'>
                    <p>HangHong</p>
                    <h3>VPN</h3>
                </div>
                </div>
            </div>
            <div className="right">
                {isLoggedIn ? (
                <div className="profile-container">
                    <div className="profile">
                        <FontAwesomeIcon icon={faUser} />
                        <a href='/profile'>Профиль</a>
                    </div>
                    <div className="cart-button">
                        <a href='/cart'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Корзина
                        </a>
                    </div>
                    <div className="logout">
                        <a href='/logout'>Выйти</a>
                    </div>
                </div>
                ) : (
                <>
                    <div className="login">
                    <FontAwesomeIcon icon={faUser} />
                    <a href='/login'>Войти</a>
                    </div>
                    <div className="register">
                    <a href='/signup'>Начать <FontAwesomeIcon icon={faRocket} /></a>
                    </div>
                </>
                )}
            </div>
            </header>
        )

    }
}

export default Header