import React from 'react';
import Link from 'next/link';

const Courses = (props) => {
    return (
        <section className="course-one course-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Link href="/faq"><a>
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://ucbad.com/public/journals/8/cover_issue_26_tr_TR.png" alt="" />
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">2020</a>
                                <h2 className="course-one__title">Cilt 3 Sayı 2 (2020) { props.year }
                                </h2>
                                <div className="course-one__meta">
                                    <a href="#" ><i className="far fa-calendar"></i> 2020-06-12</a>
                                    <a href="#" ><i className="far fa-folder-open"></i> 6 Makale</a>
                                </div>
                            </div>
                        </div></a></Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href="/faq"><a>
                            <div className="course-one__single">
                                <div className="course-one__image">
                                    <img src="https://ucbad.com/public/journals/8/cover_issue_26_tr_TR.png" alt="" />
                                </div>
                                <div className="course-one__content">
                                    <a href="#" className="course-one__category">2020</a>
                                    <h2 className="course-one__title">Cilt 3 Sayı 2 (2020)
                                    </h2>
                                    <div className="course-one__meta">
                                        <a href="#" ><i className="far fa-calendar"></i> 2020-06-12</a>
                                        <a href="#" ><i className="far fa-folder-open"></i> 6 Makale</a>
                                    </div>
                                </div>
                            </div></a></Link>
                    </div>
                    <div className="col-lg-4">
                        <Link href="/faq"><a>
                            <div className="course-one__single">
                                <div className="course-one__image">
                                    <img src="https://ucbad.com/public/journals/8/cover_issue_26_tr_TR.png" alt="" />
                                </div>
                                <div className="course-one__content">
                                    <a href="#" className="course-one__category">2020</a>
                                    <h2 className="course-one__title">Cilt 3 Sayı 2 (2020)
                                    </h2>
                                    <div className="course-one__meta">
                                        <a href="#" ><i className="far fa-calendar"></i> 2020-06-12</a>
                                        <a href="#" ><i className="far fa-folder-open"></i> 6 Makale</a>
                                    </div>
                                </div>
                            </div></a></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
