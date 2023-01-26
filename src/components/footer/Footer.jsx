import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__col">
                <h2 className="footer__title">Contato</h2>
                <div className="footer__info">
                    <p className="footer__telephone">Telefone: (11) 99999-9999</p>
                    <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="footer__instagram" rel="noreferrer">@GlaydeRibeiro</a>
                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Funcionamento</h2>
                <div className="footer__info">
                    <p className="footer__schedule">
                        Terça à sexta - 10:30 ÀS 20:00<br/>
                        Sábado - 08:00 ÁS 16:00 <br/>
                        Domingo - 08:00 ÁS 11:30<br/>
                        Segunda - fechado
                    </p>
                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title end">Endereço</h2>
                <div className="footer__info">
                    <p className="footer__address end">Rua Monte Simplon, 1279 <br/>Salgado Filho, BH-MG</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
