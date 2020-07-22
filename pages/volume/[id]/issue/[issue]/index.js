import React from 'react';
import Layout from "../../../../../components/Layout";
import NavOne from "../../../../../components/NavOne";
import PageHeader from "../../../../../components/PageHeader";
import Footer from "../../../../../components/Footer";
import Faq from "../../../../../components/Faq";
import {useRouter} from "next/router";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../api";
import Courses from "../../../../../components/Courses";

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({ query }) {
        var articles = await api("/api/submission?page=1&itemPerPage=-1&volume=" + query.id + "&issue=" + query.issue);
        return {
            articles: articles,
            volume: query.id,
            issue: query.issue,
            years: 2019,
        };
    }

    render() {
        const {articles, volume, issue, years} = this.props;

        return (
            <Layout pageTitle="Kipso | FAQ">
                <NavOne/>
                <PageHeader title={"Cilt " + volume + " Sayı " + issue + " (" + years + ")"}/>
                <Faq
                    articles={articles}
                    volume={volume}
                    issue={issue}
                />
                <Footer/>
            </Layout>);
    }
}
