import React from 'react';
import Layout from "../../../components/Layout";
import NavOne from "../../../components/NavOne";
import PageHeader from "../../../components/PageHeader";
import Footer from "../../../components/Footer";
import Faq from "../../../components/Faq";
import SimpleReactValidator from "simple-react-validator";
import api from '../../../api'
import Topbar from "../../../components/Topbar";

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        const id = query.volume.split('-').slice(-1)[0]
        const issue = query.issue.split('-').slice(-1)[0]
        var articles = await api("/api/article?page=1&itemPerPage=-1&sort=order_num&desc=false&journal_id=2&volume=" + id + "&issue=" + issue);
        var volumes = await api("/api/volume?page=1&itemPerPage=-1&sort=id&desc=true&journal_id=2&volume=" + id + "&issue=" + issue);
        return {
            volumes: volumes,
            articles: articles,
            volume: id,
            issue: issue,
        };
    }

    render() {
        const {articles, volumes, volume, issue} = this.props;

        return (
            <Layout pageTitle={"Cilt " + volume + " Sayı " + issue + " | UCBAD "}>
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Cilt " + volume + " Sayı " + issue}/>
                <Faq
                    articles={articles}
                    volume={volume}
                    issue={issue}
                    volumes={volumes}
                />
                <Footer/>
            </Layout>);
    }
}
