import React from 'react';
import Header from '../../components/header/Header.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import './index.css';
import imageGlayde from '../../assets/images/glayde-ribeiro2.jpg';
import bolo1 from '../../assets/images/bolo1.jpg';
import bolo2 from '../../assets/images/bolo2.jpg';
import bolo3 from '../../assets/images/bolo3.jpg';
import bolo4 from '../../assets/images/bolo4.jpg';

const images1 = [bolo1, bolo2, bolo3, bolo4];

function About() {
    return (
        <div className="div__body">
            <Header />
            <div className="container">
                <div className="content__about">
                    <img className="content__about__image" src={imageGlayde} alt="Glayde Ribeiro" />
                    <div className="content__about__text">
                        <h2>Glayde Ribeiro</h2>
                        <p>Com mais de 25 anos de experiência na confeitaria, Glayde Ribeiro é uma confeiteira renomada no mercado. Ela já realizou diversos cursos, participou de muitos seminários e palestras, e tem muita experiência em fazer bolos, doces, chocolates e outras delícias. Glayde ama a sua profissão e é apaixonada pelo que faz, o que se reflete em cada trabalho que ela entrega.</p>
                    </div>
                </div>
                <Gallery images={images1} />
                <RedesSociais />
                <FloatingButton />
            </div>
            <Footer />
        </div>
    );
}

export default About;