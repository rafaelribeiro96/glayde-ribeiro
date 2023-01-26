import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer father__table">
            <div className="footer__col">
                <h2 className="footer__title">Contato</h2>
                <div className="footer__info">
                    <p className="footer__telephone">Telefone: (31) 99152-5735</p>
                    <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="footer__instagram" rel="noreferrer">@GlaydeRibeiro</a>
                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Funcionamento</h2>
                <div className="footer__info father__table">
                    <table className="footer__table">
                        <tr>
                            <td>Terça à sexta</td>
                            <td>10:30 - 20:00</td>
                        </tr>
                        <tr>
                            <td>Sábado</td>
                            <td>08:00 - 16:00</td>
                        </tr>
                        <tr>
                            <td>Domingo</td>
                            <td>08:00 - 11:30</td>
                        </tr>
                        <tr>
                            <td>Segunda-feira</td>
                            <td>Fechado</td>
                        </tr>
                    </table>

                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Endereço</h2>
                <div className="footer__info">
                    <p className="footer__address">Rua Monte Simplon, 1279 <br/>Salgado Filho, BH-MG</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
