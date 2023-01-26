/* eslint-disable react/prop-types */
// Carousel.jsx
import React, { Component } from 'react';
import './Carousel.css';
import wppsvg from '../../assets/images/wpp.svg';
import instasvg from '../../assets/images/instagram.svg';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => {
                return { currentIndex: (prevState.currentIndex + 1) % this.props.images.length };
            });
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handlePrevClick() {
        this.setState(prevState => {
            return { currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length };
        });
    }

    handleNextClick() {
        this.setState(prevState => {
            return { currentIndex: (prevState.currentIndex + 1) % this.props.images.length };
        });
    }

    render() {
        return (
            <div className="carousel">
                <img src={this.props.images[this.state.currentIndex]} alt="Slideshow" className="carousel__image" />
                <div className="carousel__nav">

                    <div className="message">
                        <p>Qualidade  e sabor que só na 
                            <br />Glayde Ribeiro você encontra</p>
                    </div>
                    
                    <div className="social-buttons">
                        <a href="https://wa.me/5531991525735?text=Ol%C3%A1%20Glayde,%20te%20encontrei%20atrav%C3%A9s%20do%20seu%20site!" target="_blank" rel="noreferrer">
                            <img src={wppsvg} alt="" className="svgbtn svg__wpp"/>
                        </a>
                        <a href="https://www.instagram.com/glayderibeiro/" target="_blank" rel="noreferrer">
                            <img src={instasvg} alt="" className="svgbtn svg__instagram" />
                        </a>
                    </div>

                    <button className="carousel__nav-button" onClick={() => this.handlePrevClick()}>&lt;</button>
                    <button className="carousel__nav-button" onClick={() => this.handleNextClick()}>&gt;</button>
                </div>
            </div>
        );
    }
}

export default Carousel;
