import React, { useContext } from 'react'
import Header from '../component/Header'
import HeroSection from '../component/Herosection'
import { UseProductContext } from '../Context/ProductContext'
// import {AppContext} from "../Context/ProductContext"

const About = () => {
// const myName =useContext(AppContext);

const {myName} = UseProductContext();

  const data = {
    name:"BAGRI ECOMMERCE"
  }
  return (
    <div>
      {myName}
      <HeroSection myData={data}></HeroSection>
    </div>
  )
}

export default About
