import React, {Component} from 'react';
import circle from '../assets/images/circle-stripe.png';
import Image from "next/image";

class AboutOne extends Component {
    constructor(){
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
            <section className="about-one ">
                <Image src={circle} className="about-one__circle" alt="" />
                    <div className="container text-center">
                        <div className="block-title text-center">
                            <h2 className="block-title__title">Ulusal Çevre Bilimleri Araştırma Dergisi </h2>
                        </div>

                        <p className="about-one__text">UCBAD (Ulusal Çevre Bilimleri Araştırma Dergisi), su kirliliği, atık su kirliliği, hava kirliliği, katı atık yönetimi, biyoteknoloji, toprak kirliliği, yüzey ve yer altı suları, yenilenebilir enerji, enerji yönetimi, mikrobiyoloji, sürdürülebilirlik, atık geri kazanım ve dönüşüm, bulanık mantık ve yapay sinir ağları gibi birçok alanda çevre araştırmacıları için önde gelen bir dergidir.

                            <br />
                            Dergi yüksek kaliteli makaleler için uygundur. Özellikle orijinal araştırmalar, üst seviye derleme makaleler ve kaliteli teknik notları yayınlamaktan memnuniyet duyarız.
                        </p>
                        <a href="https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new" className="thm-btn about-one__btn">Makale Gönder</a>
                    </div>
            </section>
        );
    }
}

export default AboutOne;