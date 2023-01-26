import React from 'react';
import './NossosProdutos.css';

function NossosProdutos() {
    return (
        <div className="products">
            <h1 className="products__title">nossos produtos</h1>
            <ul className="products__list">
                <li className="products__item">
                    <a href="/produtos" className="products__link">Todos produtos</a>
                </li>
                <li className="products__item">
                    <a href="/produtos" className="products__link">bolos</a>
                </li>
                <li className="products__item">
                    <a href="/produtos" className="products__link">tortas</a>
                </li>
                <li className="products__item">
                    <a href="/produtos" className="products__link">doces</a>
                </li>
                <li className="products__item">
                    <a href="/produtos" className="products__link">presentes</a>
                </li>
            </ul>
        </div>
    );
}

export default NossosProdutos;
