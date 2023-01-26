import React from 'react';
import Header from '../../components/header/Header.jsx';
/* import Carousel from '../../components/carousel/Carousel.jsx';
import Carousel2 from '../../components/carousel2/Carousel2.jsx'; */
/* import Gallery from '../../components/gallery/Gallery.jsx'; */
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './index.css';
/* import bolo1 from '../../assets/images/bolo1.jpg';
import bolo2 from '../../assets/images/bolo2.jpg';
import bolo3 from '../../assets/images/bolo3.jpg';
import bolo4 from '../../assets/images/bolo4.jpg';

const images1 = [bolo1, bolo2, bolo3, bolo4]; */


function Contact() {
    return (
        <div className="div__body"> 
            <Header />
            <div className="container">
                <h1>Página de Contato</h1>
                {/* <Gallery images={images1} /> */}
                <RedesSociais />
            </div>
            <Footer />
        </div>
        
    );
}

export default Contact;
