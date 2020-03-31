import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

const ContactPage = () => (
    <Layout>
        <Header headerText="contact" />
        <Header headerText="I'd love to talk! Email me at the address below" />
        <p>Send me a message!</p>
        <p> <a href="mailto:ayeolakenny@gmail.com">ayeolakenny@gmail.com</a></p>
    </Layout>
)

export default ContactPage 
