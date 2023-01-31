import React from 'react';
import './SobreHome.css';
import imageGlayde from '../../assets/images/glayde-ribeiro2.jpg';

function SobreHome() {
    return (
        <div className="sobreHome">
            <a href="/sobre" className="sobreHome__link__title"><h1 className="sobreHome__title">Sobre Glayde Ribeiro</h1></a>
            <p className="resumo__about">Com mais de 25 anos de experiência na confeitaria, Glayde Ribeiro é uma confeiteira de Belo Horizonte renomada no mercado. Ela já realizou diversos cursos, participou de vários seminários e palestras, e tem muita experiência na arte em confeitar bolos, doces, chocolates e outras delícias. Glayde ama a sua profissão e é apaixonada pelo que faz, o que se reflete em cada trabalho que ela entrega.</p>
            <ul className="sobreHome__list">
                <li className="sobreHome__item">
                    <a href="/sobre" className="sobreHome__link">saiba mais sobre ela clicando aqui</a>
                </li>
            </ul>
            <img className="sobreHome__image" src={imageGlayde} alt="" />
        </div>
    );
}

export default SobreHome;
