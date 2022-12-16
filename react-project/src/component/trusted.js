import React from 'react'
import styled from 'styled-components';
import HeroSection from './Herosection';
import services from './services';
import {GrAmazon, GrAd ,GrApple,GrArchlinux , GrBitcoin} from "react-icons/gr";

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
       <h3>Trusted By 1000+ Companies</h3>

       <div className='brand-section-slider'>
        <div className='slide'>
          <GrAmazon className='cicon'/>
        </div>
        <div className='slide'>
              <GrAd className='cicon'/>
        </div>

        <div className='slide'>
            <GrApple className='cicon'/>
        </div>

        <div className='slide'>
             <GrArchlinux className='cicon'/>
        </div>
        
        <div className='slide'>
             <GrBitcoin className='cicon'/>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 10rem;
background-color: ${({ theme }) => theme.colors.bg};
.brand-section {
  padding: 12rem 0 0 0;
}
h3 {
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  font-weight: bold;
}
.cicon{
  min-width: 5rem;
  height: 5rem;
  margin:2rem;
  color:blue;
}
.brand-section-slider {
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .brand-section-slider {
    margin-top: 3.2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* background-color: red; */
    text-align: center;
  }
}
`

export default Trusted
