import React, { Fragment } from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Content = withRouter((props) => (
  <Fragment>
    <h1>{ props.router.query.title }</h1>
    <p>Esse é o conteúdo do blog, bichão! ;-P</p>
  </Fragment>
))

const Post = (props) => (
  <Layout>
    <Content />
  </Layout>
)

export default Post