import React from 'react';
import Header from '../../components/header/Header.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import './index.css';
import imageGlayde from '../../assets/images/glayde-ribeiro2.jpg';
import ex1 from '../../assets/images/ex1.jpg';
import ex2 from '../../assets/images/ex2.jpg';

const images1 = [ex2, ex2, ex2, ex2];

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