import React from 'react';

const CourseDetails = (props) => {
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="course-details__content">

                            <div className="course-details__top">
                                <div className="course-details__top-left">
                                    <h2 className="course-details__title">{articles.tr_title}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="course-details__content">

                            <p className="course-details__author">
                                Yazar(lar): {articles.authors.map((author, index) =>
                                <a href="#">{author.name} {author.surname}<sup>{index + 1}</sup>,{" "}
                                </a>
                            )}
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

                                    <h3 className="course-details__title">{articles.en_title}
                                    </h3>
                                    <p className="course-details__tab-text">
                                        {articles.tr_abstract}

                                    </p>
                                    <br/><br/>
                                    <p className="course-details__author">
                                        Anahtar Kelime(ler): {(articles.pap_keyword || "").split('|').map(a => <a>{a}</a>)}
                                    </p>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">
                                    <p className="course-details__tab-text">
                                        {articles.en_abstract}

                                    </p>
                                    <br/><br/>
                                    <p className="course-details__author">
                                        Keyword(s): {(articles.pap_keyword || "").split('|').map(a => <a>{a}</a>)}
                                    </p>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">

                                    <ul className="course-details__curriculum-list list-unstyled">
                                        {articles.citetions.map((citation, index) =>
                                            <li>
                                                <div className="course-details__curriculum-list-left">
                                                    [{index + 1}] {citation.raw}
                                                </div>
                                            </li>
                                        )}
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


                                        {articles.authors
                                            .map(a => a.surname + ", " + a.name.split(' ').map(a => a[0]).join('. ') + ".")
                                            .join(" & ")
                                        }. ({year}, {smonths[year]}). {articles.pap_title}. International Symposium for Environmental Science and Engineering Research (ISESER{year}),
                                        pp. {articles.paper_page}, Turkey.
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
