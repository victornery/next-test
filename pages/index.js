import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${ props.title }`}>
      <a>{ props.title }</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Esse é o meu Blog com Next.js! ;-P</h1>

    <ul>
      <PostLink title="Hello NextJS! ;-P" />
      <PostLink title="Learning NextJS" />
      <PostLink title="Deploy u app with Zeit" />
    </ul>
  </Layout>
)