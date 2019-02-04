import React from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'

const Home = () => (
  <div>
    <Head title="Home" />
    <Sidebar id={this.props.router.query.id}>
      <h1>TEST POST Home</h1>
    </Sidebar>
  </div>
)

export default withRouter(Home)
