import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Teachers from "../components/Teachers";
import Topbar from "../components/Topbar";

const TeachersPage = () => {
    return (
        <Layout pageTitle="Amaç ve Kapsam | UCBAD">
            <Topbar/>
            <NavOne />
            <PageHeader title="Amaç ve Kapsam" />
            <Teachers />
            <SubscribeOne />
            <Footer />
        </Layout>
    );
};

export default TeachersPage;
