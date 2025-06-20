import React from 'react'
import Welcome from '../Welcome'
import Skills from '../Skills'

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <h1>Hello</h1>
      <Skills skill={["Mano","Tharani","sridhar"]}/>
      <Welcome name="React" />
    </div>
  )
}

export default Home
