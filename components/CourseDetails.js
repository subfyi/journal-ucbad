import React from 'react';
import moment from "moment";

const CourseDetails = (props) => {
    const {articles, volume, issue, years, article} = props;

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
                                    <small><h5 className="">{articles.en_title}
                                    </h5></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="course-details__content">

                            <p className="course-details__author">
                                Yazar(lar): {articles.authors.map((authorin, index) =>
                                <a href="#">{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name} <sup>{index + 1}</sup>,{" "}
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

                                    <p className="course-details__tab-text">
                                        {articles.tr_abstract}

                                    </p>
                                    <br/><br/>
                                    <p className="course-details__author">
                                        Anahtar Kelime(ler): {(articles.keywords).filter(a => a.keyword.type == "tr").map(a => <>{a.keyword.value}, </>)}
                                    </p>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="curriculum">
                                    <p className="course-details__tab-text">
                                        {articles.en_abstract}

                                    </p>
                                    <br/><br/>
                                    <p className="course-details__author">
                                        Keyword(s): {(articles.keywords).filter(a => a.keyword.type == "en").map(a => <a>{a.keyword.value}</a>)}
                                    </p>
                                </div>
                                <div className="tab-pane  animated fadeInUp" role="tabpanel" id="review">

                                    <ul className="course-details__curriculum-list list-unstyled">
                                        {articles.citations.map((citation, index) =>
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
                            {articles.files.map((file, index) =>
                                <a target="_blank" href={file.file}className="thm-btn course-details__price-btn">[PDF]</a>
                            )}
                        </div>

                        <div className="course-details__meta">
                            <a href="#" className="course-details__meta-link">
                                Makale Dili: <span>Türkçe</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Yıl: <span>{moment(articles.pubdate).format("YYYY")}</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Yayın: <span>{"Cilt " + volume + " Sayı " + issue}</span>
                            </a>
                            <a href="#" className="course-details__meta-link">
                                Yayınlanmış: <span>  {moment(articles.pubdate).format("DD.MM.YYYY")}</span>
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
                                        {articles.authors.map((authorin, index) =>
                                            <>{authorin.author.first_name} {authorin.author.middle_name} {authorin.author.last_name},{" "} </>
                                        )} .({moment(articles.pubdate).format("YYYY")}). {articles.tr_title}. Ulusal Çevre Bilimleri Araştırma Dergisi, {volume + " ( " + issue + " ) "}, {articles.first_page}-{articles.last_page} . Retrieved
                                        from {"http://ucbad.com/volume/" + volume + "/issue/" + issue + "/article/" + article}


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
