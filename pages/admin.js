import React, { Component } from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'
import AdminList from '../components/AdminList';

class Admin extends Component {
    render() {
        return (
            <div>
                <Head title="User" />
                <Sidebar id={this.props.router.query.id}>
                    <AdminList/>
                </Sidebar>
            </div>
        )
    }
}

export default withRouter(Admin)
