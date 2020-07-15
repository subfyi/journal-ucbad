import React from 'react';

const CourseDetails = () => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="course-details__content">

                            <div className="course-details__top">
                                <div className="course-details__top-left">
                                    <h2 className="course-details__title">Engelli Turizm Potansiyelinin Değerlendirilmesi; Dünya ve Türkiye Örnekleri
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="course-details__content">

                            <p className="course-details__author">
                                Yazar(lar): <a href="#">Funda ÜNAL ANKAYA</a>, <a href="#">Bahriye GÜLGÜN ASLAN</a>
                            </p>

                            <ul className="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                                <li>
                                    <a className="active" role="tab" data-toggle="tab" href="#overview">Özet </a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#curriculum">Abastract</a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#review">Referanslar</a>
                                </li>
                            </ul>
                            <div className="tab-content course-details__tab-content ">
                                <div className="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview">
                                    <p className="course-details__tab-text">
                                        Turizm, kişilerin dinlenmek, eğlenmek, görmek ve tanımak gibi amaçlarla bir ülkede veya bir bölgede geçici konaklamalarla yapılan, kültürel ve ekonomik
                                        faaliyetlerin tümüne denir. Dünya Sağlık Örgütü verilerine göre, 7 milyardan fazla olan dünya nüfusunun, 1 milyardan fazlasında çeşitli engellilik durumu
                                        bulunmaktadır. TÜİK verilerine göre Türkiye’de nüfusun yaklaşık 10 milyonu engelli bireylerden oluşmaktadır. Çağdaş toplumlarda, tüm bireyler, eşit olarak bu
                                        tür faaliyetlere katılma hakkına sahiptir. Küresel bir sektör olan turizmin, içinde yer alan “Engelli Turizm” kavramının gerek Dünya’da gerekse Türkiye’de
                                        ekonomik yönden güçlenmesi için gelişmeye ihtiyacı vardır. Bu çalışmada; engellilik sınıflandırılması, engelli turizminin ölçütleri, Dünya’daki ve Türkiye’deki
                                        engelli turizm potansiyel durumu incelenmiş ve öneriler getirilmiştir.

                                    </p>
                                    <br/><br/>
                                    <p className="course-details__author">
                                        Anahtar Kelime(ler): Engelli Turizmi, Engellilik, Turizm Katkıları, Dünya, Türkiye
                                    </p>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">

                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">

                                    <ul className="course-details__curriculum-list list-unstyled">
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                Kampa, M. ve Castanas, E, 2008. Human health effects of air pollution, Environmental Pollution, 151, 362-367.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                Kampa, M. ve Castanas, E, 2008. Human health effects of air pollution, Environmental Pollution, 151, 362-367.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                Kampa, M. ve Castanas, E, 2008. Human health effects of air pollution, Environmental Pollution, 151, 362-367.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                Kampa, M. ve Castanas, E, 2008. Human health effects of air pollution, Environmental Pollution, 151, 362-367.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                Kampa, M. ve Castanas, E, 2008. Human health effects of air pollution, Environmental Pollution, 151, 362-367.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-details__price">
                            <p className="course-details__price-text">Tam Metin </p>
                            <a target="_blank" href="https://dergipark.org.tr/tr/download/article-file/510201" className="thm-btn course-details__price-btn">[PDF]</a>
                        </div>

                        <div className="course-details__meta">
                            <a href="#" className="course-details__meta-link">
                                Yayınlanmış: <span>2020-03-31</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Yayın: <span>Cilt 3 Sayı 2</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Yıl: <span>2020</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Makale Dili: <span>Türkçe</span>
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-12">
                        <br/>
                    </div>
                    <div className="col-lg-12">
                        <div className="course-details__list">
                            <div className="course-details__list-item">
                                <div className="course-details__list-content">

                                    <a href="#" className="course-details__meta-link">
                                        Atıf tipi: <span>APA</span>
                                    </a>
                                    <p>
                                        Funda ÜNAL ANKAYA, & Bahriye GÜLGÜN ASLAN. (2020). Engelli Turizm Potansiyelinin Değerlendirilmesi; Dünya ve Türkiye Örnekleri. Ulusal Çevre Bilimleri Araştırma
                                        Dergisi, 3(2), 52-57. Geliş tarihi gönderen https://ucbad.com/ucbad/article/view/volume-3-issue-2-article-5

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
