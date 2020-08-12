import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const TeachersPage = () => {
    return (
        <Layout pageTitle="Yazarlar İçin Rehber | UCBAD">
            <Topbar/>
            <NavOne/>
            <PageHeader title="Yazarlar İçin Rehber"/>
            <section className="team-details">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-12">
                            <div className="team-details__content">
                                <p>
                                    Tüm makaleler aşağıda linkte verilen şablona uygun olarak MS Word ile hazırlanmalıdır.

                                </p>
                                <p><a href="https://ucbad.com/doc/ucbad-sablon.docx"> Yazar Şablonu ( https://ucbad.com/doc/ucbad-sablon.docx )</a>
                                </p>

                                <p>
                                    Telif Hakkı Formu Dosyası Tüm Yazarlar Tarafından İmzalanmalı ve Dergipark Sistemine Yüklenmelidir.

                                </p>
                                <p><a href="https://ucbad.com/doc/ucbad-telif-hakki-formu.pdf"> Telif Hakkı Formu Dosyası ( https://ucbad.com/doc/ucbad-telif-hakki-formu.pdf )</a></p>


                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    );
};

export default TeachersPage;
