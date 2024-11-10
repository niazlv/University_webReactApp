import React from "react";
import '../css/main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBolt} from '@fortawesome/free-solid-svg-icons';
import planet from '../img/planet.png';

class Main extends React.Component {
    render() {
        return (<div className='main'>
            <img className='planet' src={planet} style={{opacity: 0.6}}/>
            <div className="info">
                <div className="title">Профессиональный VPN-сервис</div>
                <div className="bubbles">
                    <div className="point">Быстро</div>
                    <div className="point">Безопасно</div>
                    <div className="point">Надежно</div>
                </div>
                <div className="subtitle" style={{zIndex:10}}>
                    <FontAwesomeIcon icon={faBolt}/>
                    <div className="text">Быстрая работа с огромным количеством серверов по всему миру</div>
                </div>
            </div>
            <div className="light"></div>
            
            <div className="whyus" style={{zIndex:10}}>
                <div className="title" style={{zIndex:11}}>Почему именно мы?</div>
                <div className="list">
                    <div className="point">Полная конфиденциальность<br/>ваших данных</div>
                    <div className="point">Неограниченное количество<br/>подключенных устройств</div>
                    <div className="point">Большой выбор регионов</div>
                    <div className="point">Бесплатные регионы</div>
                    <div className="point">Устойчивы к блокировкам</div>
                    <div className="point">Удобство в использовании</div>
                    <div className="point">Оплата криптовалютой</div>
                    <div className="point">Низкие цены</div>
                </div>
            </div>
            <div className="plan">
                <div className="title">Справедливая модель ценообразования</div>
                <div className="subtitle">Выберите подходящий Вам тариф</div>
                <div className="plans">
                    <div className="sub-plan-big">
                        <a href="/catalog" className="buy">Купить</a>
                        <div className="bottom">
                            <div className="price">
                                <div className="upper">494.86<span>₽</span></div>
                                <div className="bottom">/ мес.</div>
                            </div>
                            <div className="term">1 мес.</div>
                        </div>
                    </div>
                    <div className="sub-plan-big">
                        <a href="/catalog" className="buy">Купить</a>
                        <div className="bottom">
                            <div className="price">
                                <div className="upper">449.88<span>₽</span></div>
                                <div className="bottom">/ мес.</div>
                            </div>
                            <div className="term">3 мес.</div>
                        </div>
                    </div>
                    <div className="sub-plan-big">
                        <a href="/catalog" className="buy">Купить</a>
                        <div className="bottom">
                            <div className="price">
                                <div className="upper">404.89<span>₽</span></div>
                                <div className="bottom">/ мес.</div>
                            </div>
                            <div className="term">6 мес.</div>
                        </div>
                    </div>
                    <div className="sub-plan-big">
                        <a href="/catalog" className="buy">Купить</a>
                        <div className="bottom">
                            <div className="price">
                                <div className="upper">337.41<span>₽</span></div>
                                <div className="bottom">/ мес.</div>
                            </div>
                            <div className="term">1 год</div>
                        </div>
                    </div>
                    <div className="sub-plan-big">
                        <a href="/catalog" className="buy">Купить</a>
                        <div className="bottom">
                            <div className="price">
                                <div className="upper">247.43<span>₽</span></div>
                                <div className="bottom">/ мес.</div>
                            </div>
                            <div className="term">2 года</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Main