import React from 'react';
import './RedesSociais.css';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';
import ifood from '../../assets/images/ifood-vermelho.png';

function RedesSociais() {
    return (
        <div className="redes">
            <ul className="redes__list">
                <li className="redes__item">
                    <a target="_blank" href="https://wa.me/5531991525735?text=Olá%20Glayde%20Te%20encontrei%20através%20do%20seu%20site" className="redes__link" rel="noreferrer"><img className="whatsapp__image" src={whatsapp} alt="" /></a>
                </li>
                
                <li className="redes__item">
                    <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="redes__link" rel="noreferrer"><img className="instagram__image" src={instagram} alt="" /></a>
                </li>
                <li className="redes__item">
                    <a target="_blank" href="https://www.ifood.com.br/delivery/belo-horizonte-mg/confeitaria-glayde-ribeiro-doces--bolos-salgado-filho/0ccfe710-ac48-44f0-a2e6-86e298d060ad?utm_medium=share" className="redes__link" rel="noreferrer"><img className="ifood__image" src={ifood} alt="" /></a>
                </li>
                {/* <li className="redes__item">
                    <a href="#" className="redes__link">doces</a>
                </li>
                <li className="redes__item">
                    <a href="#" className="redes__link">presentes</a>
                </li> */}
            </ul>
        </div>
    );
}

export default RedesSociais;
