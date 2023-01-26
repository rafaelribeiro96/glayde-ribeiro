import React from 'react';
import Header from '../../components/header/Header.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import './index.css';

function Contact() {
    return (
        <div className="div__body">
            <Header />
            <div className="container">
                <h1 className="contato__title">Contato</h1>

                <div className="contato__content">
                    <div className="contact__right">
                        <div className="contato__endereco">
                            <h2>Endereço:</h2>
                            <p>Rua Monte Simplon, 1279 - Salgado Filho, BH-MG</p>
                        </div>
                        <div className="contato__telefone">
                            <h2>Telefone:</h2>
                            <p>(31) 99152-5735</p>
                        </div>
                        <div className="contato__instagram">
                            <h2>Instagram:</h2>
                            <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="link__insta__contato" rel="noreferrer"><p>@GlaydeRibeiro</p></a>
                        </div>
                        <div><a href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!">
                            <button className="botao__whatsapp">Chamar no WhatsApp</button></a></div>
                    </div>

                    <div className="contato__maps">
                        <h2>Google Maps:</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14696.39479490127!2d-43.9649547!3d-19.9188254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bddf0d6f1659b3f!2sR.%20Monte%20Simpl%C3%B3n%2C%201279%20-%20Salgado%20Filho%2C%20Belo%20Horizonte%20-%20MG%2C%2030455-080!5e0!3m2!1spt-BR!2sbr!4v1611797875397!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            frameBorder="0"
                            style={{border:0}}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>
                </div>
                
                <RedesSociais />
                <FloatingButton/>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;