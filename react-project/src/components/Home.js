import React, { useState } from 'react'
import styled from "styled-components"
import Header from '../component/Header'
import Herosection from '../component/Herosection'
import Services from '../component/services'
import Trusted from '../component/trusted';
import Contact from './Contact'
import FeaturedProduct from '../component/FeaturedProduct'


const Wrapper = styled.section`
background-color: ${({ theme }) => theme.colors.bg};
width:100%rem;
height:100vh;
`



const Home = () => {

  const data = {
    name: "BAGRI STUDIO"
    ,
  }
  return (
    <>
      <Herosection myData={data} />
      <FeaturedProduct/>
      <Services />
      <Trusted />
     
    </>
  )
}

export default Home
