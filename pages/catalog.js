import React, { Component } from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'
import LogList from '../components/LogList'

class catalog extends Component {
    render() {
        return (
            <div>
                <Head title="package" />
                <Sidebar id={this.props.router.query.id}>
                    <LogList/>
                </Sidebar>
            </div>
        )
    }
}

export default withRouter(catalog)
