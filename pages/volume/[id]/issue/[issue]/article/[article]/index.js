import React from 'react';
import Layout from "../../../../../../../components/Layout";
import NavOne from "../../../../../../../components/NavOne";
import PageHeader from "../../../../../../../components/PageHeader";
import CourseDetails from "../../../../../../../components/CourseDetails";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../../../../api";
import Faq from "../../../../../../../components/Faq";

export default class Courses extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps() {
        var articles = await api("/api/submission?page=1&itemPerPage=-1");
        return {
            articles: articles,
            volume: 2,
            issue: 3,
            years: 2019,
        };
    }

    render() {
        const {volumes} = this.props;

        return (
            <Layout pageTitle="Kipso | FAQ">
                <NavOne />
                <PageHeader title="Cilt 3 Sayı 2 Makale 1" />
                <CourseDetails
                    articles={articles}
                    volume={volume}
                    issue={issue}
                />
            </Layout>);
    }
}
