import React, { Component } from 'react'
import Link from 'next/link'
import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${ props.title }`}>
      <a>{ props.title }</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Esse é o meu Blog com Next.js! ;-P</h1>

    <ul>
      <PostLink id="hello-nextjs" title="Hello NextJS! ;-P" />
      <PostLink id="learn-nextjs" title="Learning NextJS" />
      <PostLink id="deploy-nextjs" title="Deploy u app with Zeit" />
    </ul>
  </Layout>
)