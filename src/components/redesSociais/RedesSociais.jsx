import React from 'react';
import './RedesSociais.css';
import whatsapp from '../../assets/images/whatsapp.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';

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
                    <a target="_blank" href="https://www.facebook.com/GlaydeRibeiro" className="redes__link" rel="noreferrer"><img className="facebook__image" src={facebook} alt="" /></a>
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
