import React from "react";
import logo from '../img/logo.png';
import telegram from '../img/telegram.png';
import '../css/footer.css';

class Footer extends React.Component {
    render() {
        return(<footer>
            <div className='left'>
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className='footer-info'>
                    <h3>Контактные данные:</h3>
                    <p>Телефон поддержки: +7 999 157-76-24</p>
                    <p>Почта: hanghong@gmail.com</p>
                </div>
            </div>
            <div className='links'>
                <a href='#'><img src={telegram}/></a>
            </div>
        </footer>)
    }
}

export default Footer