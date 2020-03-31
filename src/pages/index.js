import React from 'react'
import Header from "../components/header"
import Layout from "../components/layout"

const IndexPage = () => (
    <Layout>
        <Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!" />
        <p>What do I like to do? Lots of course but definitely enjoy building websites.</p>
        <p>What a world</p>
        <img src="https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
    </Layout>
)

export default IndexPage
