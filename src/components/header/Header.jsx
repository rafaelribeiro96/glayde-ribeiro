/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './Header.css';
import logoGlayde from '../../assets/images/logo-glayde-escrita.png';

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
                <h1 className="header__title__img"><img className="img__title" src={logoGlayde} alt="" /></h1>                  
                <nav className="header__nav">
                    <ul>
                        <li className={`header__nav-item ${this.state.currentPage === 'home' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('home')}><a href="/">home</a></li>


                        <li className={`header__nav-item ${this.state.currentPage === 'sobre' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('sobre')}> <a href="/sobre">sobre</a></li>
                        
                        
                        <li className={`header__nav-item ${this.state.currentPage === 'produtos' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('produtos')}><a href="/produtos">produtos</a></li>
                        
                        
                        {/* <li className={`header__nav-item ${this.state.currentPage === 'blog' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('blog')}>blog</li> */}
                        
                        
                        {/* <li className={`header__nav-item ${this.state.currentPage === 'encomenda' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('encomenda')}><a href="/encomenda">encomenda</a></li> */}
                        
                        
                        <li className={`header__nav-item ${this.state.currentPage === 'contato' ? 'active' : ''}`}
                            onClick={() => this.handlePageChange('contato')}><a href="/contato">contato</a></li>

                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;