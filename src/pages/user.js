import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import styles from "../components/user.module.css"
import Layout from "../components/layout"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const Users = () => (
  <Container>
    <Layout>
      <Header headerText="Website Users"/>
      <User
        username="Jane Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="John Doe"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm John Doe, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
      username="Awele Osuka"
      avatar="https://media-exp1.licdn.com/dms/image/C5603AQFFKzGboXFMSQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=ntKOOnqurDD9BY8xbbWZc8Szyfdr9WvVG2bzOHO7s3M"
      excerpt="I'm Awele Osuka, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    </Layout>
  </Container>
)

export default Users