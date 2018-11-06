import React, { Component } from 'react'
import Layout from '../components/MyLayout'
import Link from 'next/link'
import 'isomorphic-fetch'

const PostLink = (props) => (
  <li>
    <Link href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

class Page extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://assistenciafarmaceutica.far.br/wp-json/wp/v2/posts/', {
      method: 'GET'
    })
      .then(response =>
        response.json().then(data => {
          data.map(item => {
            this.setState({
              posts: this.state.posts.concat(
                [
                  [item.id, item.title.rendered, item.date, item.content.rendered]
                ]
              )
            })
          })
          console.log(this.state)
        }))
      .catch(function (err) {
        console.error(err);
      })
  }

  render() {
    const { posts } = this.state

    return (
      <Layout>
        <h1>Meu Blog! ;-P</h1>
        {
          posts.map(e => (
            <PostLink title={e[1]} id={e[0]} />
          ))
        }
      </Layout>
    )
  }
}

export default Page