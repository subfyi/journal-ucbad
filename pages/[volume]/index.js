import React from 'react'
import Layout from '../../components/Layout'
import NavOne from '../../components/NavOne'
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import Courses from '../../components/Courses'
import SimpleReactValidator from 'simple-react-validator'
import api from '../../api'
import Topbar from '../../components/Topbar'

export default class YearList extends React.Component {
    state = {}

    constructor(props) {
        super(props)

        this.validator = new SimpleReactValidator()
    }

    static async getInitialProps({ query }) {
        const id = query.volume.split('-').slice(-1)[0]
        var volumes = await api('/api/volumes?page=1&itemPerPage=-1&sort=id&desc=true&journal_id=2&volume=' + id)
        return {
            volumes: volumes
        }
    }

    render() {
        const { volumes } = this.props

        return (
            <Layout pageTitle="Ciltler | UCBAD">
                <Topbar />
                <NavOne />
                <PageHeader title="Ciltler" />
                <Courses
                    volumes={volumes}
                />
                <Footer />
            </Layout>)
    }
}

