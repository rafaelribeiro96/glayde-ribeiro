import React from 'react';
import Header from '../../components/header/Header.jsx';
import Carousel from '../../components/carousel/Carousel.jsx';
import Carousel2 from '../../components/carousel2/Carousel2.jsx';
import Gallery from '../../components/gallery/Gallery.jsx';
import NossosProdutos from '../../components/nossosProdutos/NossosProdutos.jsx';
import SobreHome from '../../components/sobreHome/SobreHome.jsx';
import RedesSociais from '../../components/redesSociais/RedesSociais.jsx';
import Footer from '../../components/footer/Footer.jsx';
import './index.css';
import bolo1 from '../../assets/images/bolo1.jpg';
import bolo2 from '../../assets/images/bolo2.jpg';
import bolo3 from '../../assets/images/bolo3.jpg';
import bolo4 from '../../assets/images/bolo4.jpg';
import bolo5 from '../../assets/images/bolo5.jpg';
import bolo6 from '../../assets/images/bolo6.jpg';
import bolo7 from '../../assets/images/bolo7.jpg';
import bolo8 from '../../assets/images/bolo8.jpg';
import bolo9 from '../../assets/images/bolo9.jpg';
import bolo10 from '../../assets/images/bolo10.jpg';

const images1 = [bolo1, bolo2, bolo3, bolo4];
const images2 = [bolo1, bolo2, bolo3, bolo4, bolo5, bolo6, bolo9, bolo8];
const images3 = [bolo5, bolo6, bolo9, bolo8];


function Main() {
    return (
        <div className="container">
            <Header />
            <Carousel images={images1} interval={3000} />
            <Gallery images={images2} />
            <NossosProdutos />
            <Carousel2 images={images3} interval={3000} />
            <SobreHome />
            <RedesSociais />
            <Footer />
        </div>
        
    );
}

export default Main;
