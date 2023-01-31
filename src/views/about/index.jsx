import React from 'react';
import Header from '../../components/header/Header.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import './index.css';
import imageGlayde from '../../assets/images/sobre.jpg';
/* import ex1 from '../../assets/images/ex1.jpg';
import ex2 from '../../assets/images/ex2.jpg'; */
import about1 from '../../assets/images/about/about1.jpg';
import about2 from '../../assets/images/about/about2.jpg';
import about3 from '../../assets/images/about/about3.jpg';
import about4 from '../../assets/images/about/about4.png';


/* const images1 = [ex2, ex2, ex2, ex2]; */
const images1 = [about1, about2, about3, about4];

function About() {
    return (
        <div className="div__body">
            <Header />
            <div className="container">
                <div className="content__about">
                    <div className="div__content__about__image"><img className="content__about__image" src={imageGlayde} alt="Glayde Ribeiro" /></div>
                    <div className="content__about__text">
                        <h2>Glayde Ribeiro</h2>
                        <p>Glayde Ribeiro tem mais de 25 anos de experiência na confeitaria e é reconhecida no mercado pelo seu talento e paixão pelo que faz, tem a arte de confeitar como sua paixão desde 1995 e trabalha para tornar cada evento único e especial. Com diversos cursos e participações em seminários e palestras, a Confeitaria Glayde Ribeiro oferece bolos, doces, chocolates e outras delícias de alta qualidade na cidade de Belo Horizonte e região.</p><br />

                        <p>Nós oferecemos uma ampla variedade de opções, desde bolos para casamentos, aniversários, festas empresariais, chá de bebê, chá de revelação, batizado e outros eventos. Trabalhamos também com naked cakes, bentô cake, bolos personalizados, cupcakes, bombons, bem-casados, presentes e lembrancinhas com o tema que o cliente desejar, além de diversos outros produtos do mundo da confeitaria.</p><br />

                        <p>A Confeitaria Glayde Ribeiro fica localizada em Belo Horizonte, e atendemos outras cidades como Nova Lima, Betim, Contagem, entre outras da região metropolitana de Belo Horizonte - Minas Gerais. Entre em contato conosco para encomendar os melhores bolos, doces e chocolates para o seu evento.</p>
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