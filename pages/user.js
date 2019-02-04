import React, { Component } from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'
import UserList from '../components/UserList'

class User extends Component {
    render() {
        return (
            <div>
                <Head title="User" />
                <Sidebar id={this.props.router.query.id}>
                    <UserList/>
                </Sidebar>
            </div>
        )
    }
}

export default withRouter(User)
