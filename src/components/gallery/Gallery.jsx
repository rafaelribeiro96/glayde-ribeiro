/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            {selectedImage ? (
                <div className="selected-image-container">
                    <img src={selectedImage} alt="Selected" className="selected-image" />
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
