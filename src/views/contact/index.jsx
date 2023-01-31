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
                    

                    <div className="contato__maps">
                        <h2>Google Maps:</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.639542078802!2d-43.984014712605216!3d-19.939589007281366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697ab7a0c86b1%3A0x7a57712a8f8a65e8!2sConfeitaria%20Glayde%20Ribeiro!5e0!3m2!1spt-BR!2sbr!4v1674829676319!5m2!1spt-BR!2sbr"
                            width="400"
                            height="300"
                            frameBorder="0"
                            style={{border:0}}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </div>

                    <div className="contact__right">
                        <div className="contato__endereco">
                            <h2>Endereço:</h2>
                            <p>Rua Monte Simplon, 1279 - Salgado Filho, BH-MG</p>
                        </div>
                        <div className="contato__telefone">
                            <h2>Telefone:</h2>
                            <p className="phone__contact"><a href="tel:+31991525735" className="footer__telephone">(31) 99152-5735</a></p>
                        </div>
                        <div className="contato__instagram">
                            <h2>Instagram:</h2>
                            <a target="_blank" href="https://www.instagram.com/glayderibeiro/" className="link__insta__contato" rel="noreferrer"><p>@GlaydeRibeiro</p></a>
                        </div>
                        <div><a target="_blank" href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!" rel="noreferrer">
                            <button className="botao__whatsapp">Chamar no WhatsApp</button></a></div>
                    </div>

                    <div className="contato__encomenda">
                        <h2>Como realizar o seu pedido:</h2> <br />
                        <p>A Confeitaria Glayde Ribeiro trabalha com encomendas, e os pedidos podem ser feitos através do nosso Whatsapp: (31)99152-5735 ou através de ligação neste mesmo número.</p> <br />

                        <p>Recomendamos que realize suas encomendas com um maior prazo em relação a data do evento, para que possamos garantir a vaga em nossa agenda.</p> <br />
                    
                        <h3>Formas de Pagamento:</h3>
                        <p> As formas de pagamento incluem PIX, transferência bancária ou cartão de crédito/ débito (pelo menos 50% do valor total deve ser pago no momento da realização da encomenda, e o restante no dia da entrega).</p> <br />
                    
                        <p>Para consultar condições de frete, favor chamar no WhatsApp.</p> <br />
                    
                        <h3>Onde retirar:</h3>
                        <p>Nossa localização para busca dos pedidos é na Rua Monte Simplon, 1279, Salgado Filho - Belo Horizonte - MG. Oferecemos atendimento de terça a sexta das 10:30 às 20:00 e aos sábados das 08:00 às 16:00.</p>
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