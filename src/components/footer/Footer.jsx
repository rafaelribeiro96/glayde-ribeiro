import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer father__table">
            <div className="footer__col">
                <h2 className="footer__title">Contato</h2>
                <div className="footer__info">
                    <a href="tel:+31991525735" className="footer__telephone">Telefone: (31) 99152-5735</a>
                    <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="footer__instagram" rel="noreferrer">Instagram @GlaydeRibeiro</a>
                    <a target="_blank" href="https://www.ifood.com.br/delivery/belo-horizonte-mg/confeitaria-glayde-ribeiro-doces--bolos-salgado-filho/0ccfe710-ac48-44f0-a2e6-86e298d060ad?utm_medium=share" className="footer__instagram" rel="noreferrer">Ifood Glayde Ribeiro</a>
                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Funcionamento</h2>
                <div className="footer__info father__table">
                    <table className="footer__table">
                        <tbody>
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
                        </tbody>
                    </table>

                </div>
            </div>
            <div className="footer__col">
                <h2 className="footer__title">Endereço</h2>
                <div className="footer__info">
                    <a href="https://goo.gl/maps/v1vzrNixbn43CjTt6" target="_blank" rel="noreferrer" className="footer__address__link"> <p className="footer__address">Rua Monte Simplon, 1279 <br/>Salgado Filho, BH-MG</p></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
