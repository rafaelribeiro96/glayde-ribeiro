/* eslint-disable react/prop-types */
import React from 'react';
import './FloatingButton.css';
import whatsapp from '../../assets/images/whatsapp.png';
import ifood from '../../assets/images/ifood-vermelho.png';

class FloatingButton extends React.Component {
    render() {
        return (
            <div>
                <a href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!" target="_blank" className="floating-button" rel="noreferrer"><img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp" />
                </a>

                <a href="https://www.ifood.com.br/delivery/belo-horizonte-mg/confeitaria-glayde-ribeiro-doces--bolos-salgado-filho/0ccfe710-ac48-44f0-a2e6-86e298d060ad?utm_medium=share" target="_blank" className="floating-button2 " rel="noreferrer"><img  className="button-ifood" src={ifood} alt="botão ifood" />
                </a>
            </div>
        );
    }
}

export default FloatingButton;