import React from 'react';
import Layout from "../../../../../components/Layout";
import NavOne from "../../../../../components/NavOne";
import PageHeader from "../../../../../components/PageHeader";
import Footer from "../../../../../components/Footer";
import Faq from "../../../../../components/Faq";
import {useRouter} from "next/router";

const FaqPage = (props) => {
    console.log(arguments);

    const router = useRouter();
    const { id, issue } = router.query;

    return (
        <Layout pageTitle="Kipso | FAQ">
            <NavOne />
            <PageHeader title="Cilt 3 Sayı ii (2020)" />

            Volume: { id }
            Issue: { issue }
            <Faq/>
            <Footer />
        </Layout>
    );
};

export default FaqPage;
