import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"

const IndexPage = () => (
    <div style={{ color: `purple` }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Hello Gatsby" />
        <p>What a world</p>
        <img src="https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
)

export default IndexPage
