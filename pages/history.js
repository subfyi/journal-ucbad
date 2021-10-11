import React from 'react'
import Layout from '../components/Layout'
import NavOne from '../components/NavOne'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import Topbar from '../components/Topbar'
import SubscribeOne from '../components/SubscribeOne'

const TeachersPage = () => {
  return (
    <Layout pageTitle="Geçmiş | UCBAD">
      <Topbar />
      <NavOne />
      <PageHeader title="Geçmiş" />
      <section className="team-details">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="team-details__content">
                <p><strong>Dergi Geçmişi</strong></p>
                <table className="tg" border="0">
                  <tbody>
                  <tr>
                    <td>2018</td>
                    <td>Açılış sayısı yayınlandı, başlangıçta üç ayda bir dergi olarak yayınlandı.</td>
                  </tr>
                  <tr>
                    <td>2021</td>
                    <td>Yılda iki kez yayın planına geçildi. </td>
                  </tr>
                  </tbody>
                </table>
                <p><strong>Infos</strong></p>
                <table className="tg" border="0">
                  <tbody>
                  <tr>
                    <td>2018</td>
                    <td><em>Kurucu</em>: Zeynep Cansu Ayturan
                      <br />
                      <em>Editor-in-Chief </em>: Prof. Dr. Sukru Dursun
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SubscribeOne />
      <Footer />
    </Layout>
  )
}

export default TeachersPage
