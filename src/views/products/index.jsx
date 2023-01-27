import React from 'react';
import Header from '../../components/header/Header.jsx';
/* import Carousel from '../../components/carousel/Carousel.jsx';
import Carousel2 from '../../components/carousel2/Carousel2.jsx'; */
import Gallery from '../../components/gallery/Gallery.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import FloatingButton from '../../components/botaoContato/FloatingButton.jsx';
import './index.css';
import bolo1 from '../../assets/images/bolo1.jpg';
import bolo2 from '../../assets/images/bolo2.jpg';
import bolo3 from '../../assets/images/bolo3.jpg';
import bolo4 from '../../assets/images/bolo4.jpg';
import bolo5 from '../../assets/images/bolo5.jpg';
import bolo6 from '../../assets/images/bolo6.jpg';
import bolo7 from '../../assets/images/bolo7.jpg';
import bolo8 from '../../assets/images/bolo8.jpg';

const images1 = [bolo1, bolo2, bolo3, bolo4, bolo5, bolo6, bolo7, bolo8, 
    bolo1, bolo2, bolo3, bolo4, bolo5, bolo6, bolo7, bolo8];


function Products() {
    return (
        <div className="div__body"> 
            <Header />
            <div className="container">
                <h1 className="title__products">Página de Produtos</h1>
                <Gallery images={images1} />
                <RedesSociais />
                <FloatingButton />
            </div>
            <Footer />
        </div>
        
    );
}

export default Products;
