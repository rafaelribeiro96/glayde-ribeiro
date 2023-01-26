import React from 'react';
import './SobreHome.css';
import imageGlayde from '../../assets/images/glayde-ribeiro2.jpg';

function SobreHome() {
    return (
        <div className="sobreHome">
            <h1 className="sobreHome__title">Sobre Glayde Ribeiro</h1>
            <ul className="sobreHome__list">
                <li className="sobreHome__item">
                    <a href="#" className="sobreHome__link">saiba mais sobre ela clicando aqui</a>
                </li>
            </ul>
            <img className="sobreHome__image" src={imageGlayde} alt="" />
        </div>
    );
}

export default SobreHome;
