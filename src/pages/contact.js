import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container.module.css"

const ContactPage = () => (
    <div className={Container.basicColor}>
        <Link to="/" >Home</Link>
        <Header headerText="contact" />
        <p>Send us a message!</p>
    </div>
)

export default ContactPage 
