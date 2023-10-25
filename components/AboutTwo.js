import React, {Component} from 'react';

export default class AboutTwo extends Component {
    constructor() {
        super()
        this.state = {
            startCounter: false
        }
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({startCounter: true});
        }
    }

    render() {
        return (
            <section className="about-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="about-one__about-page">
                                <div className="about-one__text">
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text"> Online Gönderme Sistemi</p>
                                            <p>
                                                Etkili, kolay ve kullanıcı dostu çevrim içi gönderme sistemi, gönderimden yayınlamaya kadar olan zamanı azaltır.
                                            </p>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-rocket"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">
                                                Hızlı Yayın</p>
                                            <p>
                                                Online gönderi, eş zamanlı hakem değerlendirmesi, makalenin yayınlanmasını basit ve verimli bir şekilde gerçekleştirir.
                                            </p>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="about-two__single">
                                        <div className="about-two__single-icon">
                                            <i className="fas fa-newspaper"></i>
                                        </div>
                                        <div className="about-two__single-content">
                                            <p className="about-two__single-text">Sınırsız Alan İmkânı</p>
                                            <p>
                                                Çevrimiçi yayın, rakamlar, kapsamlı veri ve yüksek çözünürlükte resimler için sınırsız alan anlamına gelir.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}