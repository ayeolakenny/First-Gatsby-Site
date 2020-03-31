import React from "react"
import Header from "../components/header"
import Container from "../components/container.module.css"

const AboutPage = () => (
    <div className={Container.basicColor}>
        <Header headerText="About Gatsby" />
        <Header headerText="It's pretty cool" /> 
        <p>Such wow. Very React.</p>
    </div>
)

export default AboutPage