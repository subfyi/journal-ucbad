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

    static async getInitialProps() {
        var volumes = await api("/api/submission?page=1&itemPerPage=-1");
        return {
            volumes: volumes
        };
    }

    render() {
        const {volumes} = this.props;

    return (
        <Layout pageTitle="Ciltler | UCBAD">
            <NavOne />
            <PageHeader title="Ciltler" />
            <Courses
                volumes={volumes}
            />
            <Footer />
        </Layout>);
    }
}