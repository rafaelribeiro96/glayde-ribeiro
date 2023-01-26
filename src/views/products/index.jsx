import React from 'react';
import Header from '../../components/header/Header.jsx';
/* import Carousel from '../../components/carousel/Carousel.jsx';
import Carousel2 from '../../components/carousel2/Carousel2.jsx'; */
import Gallery from '../../components/gallery/Gallery.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './index.css';
import bolo1 from '../../assets/images/bolo1.jpg';
import bolo2 from '../../assets/images/bolo2.jpg';
import bolo3 from '../../assets/images/bolo3.jpg';
import bolo4 from '../../assets/images/bolo4.jpg';

const images1 = [bolo1, bolo2, bolo3, bolo4];


function Products() {
    return (
        <div className="container">
            <Header />
            <h1>Página de Produtos</h1>
            <Gallery images={images1} />
            <RedesSociais />
            <Footer />
        </div>
        
    );
}

export default Products;
