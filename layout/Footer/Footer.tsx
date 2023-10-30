"use client";

import React from 'react';

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    return (

        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>Başlangıç</h2>
                                            <p>2018</p>
                                        </li>
                                        <li>
                                            <h2>Yayın Aralığı</h2>
                                            <p>yılda 2 sayı</p>
                                        </li>
                                        <li>
                                            <h2>Anahtar başlığı</h2>
                                            <p>Ulusal Çevre Bilimleri Araştırma Dergisi</p>
                                        </li>
                                        <li>

                                            <a href="https://dergipark.org.tr/tr/pub/ucbad/writing-rules" className="thm-btn">Yazarlar İçin Rehber</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>e-ISSN</h2>
                                            <p>2636-7483</p>
                                        </li>
                                        <li>
                                            <h2>Website</h2>
                                            <p>https://dergipark.org.tr/tr/pub/ucbad</p>
                                        </li>
                                        <li>
                                            <h2>Yayıncı</h2>
                                            <p>Zeynep Cansu Ayturan</p>
                                        </li>
                                        <li>
                                            <a href="https://dergipark.org.tr/tr/pub/ucbad/aim-and-scope" className="thm-btn">Etik İlkeler ve Yayın Politikası</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">Hakkında</h2>
                                    <p className="footer-widget__text">Ulusal Çevre Bilimleri Araştırma Dergisi, 2018'den bu yana her üç ayda bir yayınlanan hakemli dergidir.
                                    </p>
                                    <div className="footer-widget__btn-block">
                                        <a href="https://dergipark.org.tr/tr/pub/ucbad/archive" className="thm-btn">Ciltler</a>
                                        <a href="/contact" className="thm-btn">İletişim</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">&copy; Copyright 2023 by <a target="_blank" href="https://sub.fyi/">Sub.fyi</a></p>
                        <div className="site-footer__social">
                            <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                className="fas fa-arrow-up"></i></div>
                            <a target="_blank" href="https://www.facebook.com/ucbad"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://dergipark.org.tr/tr/pub/ucbad/indexes"><i className="fas fa-book"></i></a>
                            <a href="https://dergipark.org.tr/tr/pub/ucbad/page/12797"><i className="fas fa-history"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input type="text" name="search" placeholder="Type here to Search...." />
                        <button type="submit"><i className="kipso-icon-magnifying-glass"></i></button>
                        <div className="cancel"><i className="fas fa-times-circle"></i></div>
                    </form>
                </div>
            </div>
        </div>
    );
}

