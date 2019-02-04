import React, { Component } from 'react'
import Head from '../components/head'
import Sidebar from '../components/Sidebar'
import { withRouter } from 'next/router'
import PaymentList from '../components/PaymentList';

export class Payment extends Component {
  render() {
    return (
      <div>
        <Head title="Payment" />
        <Sidebar id={this.props.router.query.id}>
            <PaymentList/>
        </Sidebar>
      </div>
    )
  }
}

export default withRouter(Payment)
