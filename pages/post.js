import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout'

let infos = {}

const Page = withRouter(
  (props) => {

    fetch('http://assistenciafarmaceutica.far.br/wp-json/wp/v2/posts/' + props.router.query.id, {
      method: 'GET'
    })
      .then(response =>
        response.json().then(data => {
          infos.title = data.title.rendered;
          infos.content = data.content.rendered;
          infos.date = data.date;
        }))
      .catch(function (err) {
        console.error(err);
      })

    return (
      <Layout>
        <h1>{infos.title}</h1>
        <p>This is the Blog Post Content! ;-P</p>
      </Layout>
    )
  })

class Post extends Component {
  // static async getInitialProps({ req }) {

  // }

  render() {
    return (
      <Layout>
        <h1> {} </h1>
      </Layout>
    )
  }

}

export default Post