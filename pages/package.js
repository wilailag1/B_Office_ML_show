import React, { Component } from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'
import PackageList from '../components/PackageList'

class packlist extends Component {
    render() {
        return (
            <div>
                <Head title="package" />
                <Sidebar id={this.props.router.query.id}>
                    <PackageList />
                </Sidebar>
            </div>
        )
    }
}

export default withRouter(packlist)
