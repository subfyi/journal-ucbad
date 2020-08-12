import React from 'react';
import Layout from "../../../../../components/Layout";
import NavOne from "../../../../../components/NavOne";
import PageHeader from "../../../../../components/PageHeader";
import Footer from "../../../../../components/Footer";
import Faq from "../../../../../components/Faq";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../api";
import Topbar from "../../../../../components/Topbar";

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({ query }) {
        var articles = await api("/api/submission?page=1&itemPerPage=-1&sort=id&desc=false&volume=" + query.id + "&issue=" + query.issue);
        return {
            articles: articles,
            volume: query.id,
            issue: query.issue,
        };
    }

    render() {
        const {articles, volume, issue} = this.props;

        return (
            <Layout pageTitle={"Cilt " + volume + " Sayı " + issue  + " | UCBAD "}>
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Cilt " + volume + " Sayı " + issue }/>
                <Faq
                    articles={articles}
                    volume={volume}
                    issue={issue}
                />
                <Footer/>
            </Layout>);
    }
}
