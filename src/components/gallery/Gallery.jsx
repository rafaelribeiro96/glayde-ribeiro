/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    /* const handleClose = () => {
        setSelectedImage(null);
    }; */

    const handlePrev = () => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setSelectedImage(images[prevIndex]);
        }
    };
    
    const handleNext = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = currentIndex + 1;
        if (nextIndex < images.length) {
            setSelectedImage(images[nextIndex]);
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.keyCode === 37) {
                    handlePrev();
                }
                if (e.keyCode === 39) {
                    handleNext();
                }
                if (e.keyCode === 27) {
                    setSelectedImage(null);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedImage, handlePrev, handleNext]);
    

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (selectedImage && !e.target.closest('.selected-image-container')) {
                setSelectedImage(null);
            }
        };
        window.addEventListener('mousedown', handleOutsideClick);
        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [selectedImage]);

    const handleClose = (event) => {
        if(event.target === event.currentTarget) {
            setSelectedImage(null);
        }
    };

    return (
        <div className="gallery-container">
            {selectedImage ? (
                <div className="selected-image-container" onClick={handleClose}>
                    <img src={selectedImage} alt="Selected" className="selected-image" />
                    <button className="prev-button" onClick={handlePrev}>&lt;</button>
                    <button className="next-button" onClick={handleNext}>&gt;</button>
                    <button className="close-button" onClick={handleClose}>
            X
                    </button>
                </div>
            ) : null}
            <div className="thumbnail-container">
                {images.map((image) => (
                    <img
                        key={image}
                        src={image}
                        alt="Thumbnail"
                        className="thumbnail-image"
                        onClick={() => handleClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
