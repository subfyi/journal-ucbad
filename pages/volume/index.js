import React from 'react';
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Courses from "../../components/Courses";
import SimpleReactValidator from 'simple-react-validator'
import api from '../../api'


export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({query}) {
        var posters = await api("/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&posters=1&year=" + query.id);
        var orals = await api("/api/submission?page=1&itemPerPage=-1&query=&sort=id&desc=false&orals=1&year=" + query.id);
        return {
            posters,
            orals,
            year: query.id
        };
    }

    render() {
        const {orals, posters, year} = this.props;

    return (
        <Layout pageTitle="Ciltler | UCBAD">
            <NavOne />
            <PageHeader title="Ciltler" />
            <Courses
                year={year}
            />
            <Footer />
        </Layout>);
    }
}
