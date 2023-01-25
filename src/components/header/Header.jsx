/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        };
    }

    handlePageChange(page) {
        this.setState({ currentPage: page });
    }

    render() {
        return (
            <header className="header">
                {/* <h1 className="header__title">{this.props.title}</h1> */}
                <h1 className="header__title">Glayde Ribeiro</h1>                
                <nav className="header__nav">
                    <ul>
                        <li className={`header__nav-item ${this.state.currentPage === 'home' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('home')}>home</li>
                        <li className={`header__nav-item ${this.state.currentPage === 'sobre' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('sobre')}>sobre</li>
                        <li className={`header__nav-item ${this.state.currentPage === 'cardapio' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('cardapio')}>cardápio</li>
                        <li className={`header__nav-item ${this.state.currentPage === 'blog' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('blog')}>blog</li>
                        <li className={`header__nav-item ${this.state.currentPage === 'encomenda' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('encomenda')}>encomenda</li>
                        <li className={`header__nav-item ${this.state.currentPage === 'contato' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('contato')}>contato</li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;