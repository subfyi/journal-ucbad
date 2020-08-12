import React, {Component} from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="topbar-one">
                <div className="container">
                    <div className="topbar-one__left">
                        <a href="https://dergipark.org.tr/tr/pub/ucbad">ULUSAL ÇEVRE BİLİMLERİ ARAŞTIRMA DERGİSİ</a>
                        <a target="_blank" href="https://portal.issn.org/resource/issn/2636-7483">ISSN-2636-7483</a>
                    </div>
                    <div className="topbar-one__right">
                        <a href="https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new">Makale Gönder</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;