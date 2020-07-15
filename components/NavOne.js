import React, {Component} from 'react';
import Link from 'next/link';

class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: false
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    serachButton = () => {
        let searchToggle = document.querySelector(".search-toggle");
        let searchPopup = document.querySelector(".search-popup");
        let searchClose = document.querySelector(".cancel");
        let searchOverlay = document.querySelector(".search-overlay");

        searchToggle.addEventListener("click", function () {
            searchPopup.classList.add('active');
        });

        searchClose.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });

        searchOverlay.addEventListener("click", function () {
            searchPopup.classList.remove('active');
        });
    }

    render() {
        return (
            <header className="site-header site-header__header-one ">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/assets/images/logo-dark.png" className="main-logo" width="128"
                                         alt="Awesome Image" />
                                </a>
                            </Link>
                            <div className="header__social">
                                <a href="#"><i className="fab fa-facebook-square"></i></a>
                            </div>
                            <button className="menu-toggler">
                                <span className="kipso-icon-menu"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current">
                                    <Link href="/"><a>Anasayfa</a></Link>
                                </li>
                                <li>
                                    <a href="/volumes">Ciltler</a>
                                </li>
                                <li>
                                    <Link href="/teacher-details"><a>Editör Kurulu</a></Link>
                                </li>
                                <li>
                                    <Link href="/teachers"><a>Amaç ve Kapsam</a></Link>
                                </li>
                                <li>
                                    <Link href="/contact"><a>İletişim</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavOne;