import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import '../css/header.css';

class Header extends React.Component{
    render(){
        return (<header>
            <div className='left'>
                <div className='logo'>
                    <img src={logo} />
                    <div className='logo-text'>
                        <p>HangHong</p>
                        <h3>VPN</h3>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="login">
                    <FontAwesomeIcon icon={faUser} />
                    <a href='#'>Войти</a>
                </div>
                <div className="register">
                    <a href='#'>Начать <FontAwesomeIcon icon={faRocket} /></a>
                </div>
            </div>
        </header>)

    }
}

export default Header