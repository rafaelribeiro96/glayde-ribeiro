/* eslint-disable react/prop-types */
import React from 'react';
import './FloatingButton.css';

class FloatingButton extends React.Component {
    render() {
        return (
            <a href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!" target="_blank" className="floating-button" rel="noreferrer"><img src="https://i.ibb.co/VgSspjY/whatsapp-button.png" alt="botão whatsapp" />
            </a>
        );
    }
}

export default FloatingButton;