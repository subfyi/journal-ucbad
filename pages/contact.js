import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const GalleryPage = () => {
    return (
        <Layout pageTitle="Kipso | Contact">
            <NavOne />
            <PageHeader title="Contact" />
            <Contact />
            <ContactForm/>
            <Footer />
        </Layout>
    );
};

export default GalleryPage;
