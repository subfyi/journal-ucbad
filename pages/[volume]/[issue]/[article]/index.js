import React from 'react';
import Layout from "../../../../components/Layout";
import NavOne from "../../../../components/NavOne";
import PageHeader from "../../../../components/PageHeader";
import CourseDetails from "../../../../components/CourseDetails";
import SimpleReactValidator from "simple-react-validator";
import api from "../../../../api";
import Footer from "../../../../components/Footer";
import Topbar from "../../../../components/Topbar";

export default class Courses extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        const id = query.volume.split('-').slice(-1)[0]
        const issue = query.issue.split('-').slice(-1)[0]
        const article = query.article.split('-').slice(-1)[0]
        var articles = await api("/api/articles?page=1&itemPerPage=-1&journal=UCBAD&volume=" + id + "&issue=" + issue + "&article=" + article);
        return {
            articles: articles.data[0],
            volume: id,
            issue: issue,
            article: article,
        };
    }

    render() {
        const {articles, volume, issue, article} = this.props;

        if (!articles) {
            return <div>404</div>
        }

        return (
            <Layout
                pageTitle={articles.tr_title + " | UCBAD "}
                articles={articles}
                volume={volume}
                issue={issue}
                article={article}
            >
                <Topbar/>
                <NavOne/>
                <PageHeader title={"Cilt " + volume + " Sayı " + issue + " Makale " + article}/>
                <CourseDetails
                    articles={articles}
                    volume={volume}
                    issue={issue}
                    article={article}
                />
                <Footer/>
            </Layout>);
    }
}
