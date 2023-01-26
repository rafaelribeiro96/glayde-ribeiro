/* eslint-disable react/prop-types */
// Carousel2.jsx
import React, { Component } from 'react';
import './Carousel2.css';

class Carousel2 extends Component {
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
            <div className="carousel2">
                <div className="carousel2__image-container">
                    <img src={this.props.images[this.state.currentIndex]} alt="Slideshow" className="carousel2__image" />
                </div>
                <div className="carousel2__nav">
                    <button className="carousel2__nav-button" onClick={() => this.handlePrevClick()}>&lt;</button>
                    <button className="carousel2__nav-button" onClick={() => this.handleNextClick()}>&gt;</button>
                </div>
            </div>
        );
    }
}

export default Carousel2;
