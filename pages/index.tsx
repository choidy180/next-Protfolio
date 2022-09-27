import type { NextPage } from 'next'
import { useEffect } from 'react'
import styled from 'styled-components'
import LeftTab from '../components/nav'
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCaretDownFill } from 'react-icons/bs';

const Home: NextPage = (props) => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <Box>
        <TopBox data-aos="fade-left">
          <video src="/images/background/ì__ì_¤ ì½_ë__ - 4733.mp4" autoPlay muted loop/>
          <div className='titleBox'>
            <h1>안녕하세요. 개발자 김민석입니다...</h1>
          </div>
          <div className='underIcon'>
            <BsCaretDownFill/>
          </div>
        </TopBox>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`
const Box = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const TopBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(60%);
  }
  .titleBox::before{
    content:'';
    position: absolute;
    top: -2px;
    right: -8px;
    width: 2px;
    height: 42px;
    background-color: #FFFFFF;
    animation: blinkCursor 0.8s steps(3) infinite;
  }
  &::before{
    content: '';
    width: 100%;
    height: 30px;
    background-color: #FFFFFF;
    position: absolute;
    bottom: 0;
    z-index: 999;
    &::after{
      content: '';
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      bottom: 0;
    }
  }
  &::after{
    content: '';
    width: 80px;
    height: 80px;
    background-color: #FFFFFF;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    bottom: -15px;
    border-top-left-radius: 50%;
    z-index: 999;
    &::after{
      content: '';
      width: 50px;
      height: 50px;
      background-color: red;
      position: absolute;
      bottom: 0;
    }
  }
  @keyframes blinkCursor {
    0%, 75%
    {
      opacity: 1;
    }
    76%, 100%
    {
      opacity: 0;
    }
  }
  .titleBox {
    position: absolute;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0002);
    h1{
      position: relative;
      color: #FFFFFF;
      font-size: 42px;
      height: 41px;
      line-height: 42px;
      font-family: 'MabinogiClassicR';
      text-transform: uppercase;
      animation: typing 6s steps(18) infinite;
      overflow: hidden;
    }
    @keyframes typing {
      0%, 90%, 100%
      {
        width: 0;
      }
      30%, 60%
      {
        width: 570px;
      }
    }
    @media (max-width: 769px) {
      h1 {
        font-size: 22px;
        height: 21px;
        line-height: 22px;
      }
      @keyframes typing {
        0%, 90%, 100%
        {
          width: 0;
        }
        30%, 60%
        {
          width: 300px;
        }
      }
    }
  }
  @media (max-width: 769px) {
    div::before{
      top: -2px;
      right: -8px;
      width: 2px;
      height: 22px;
    }
  }
  .underIcon{
    position: absolute;
    width: 20px;
    height: 40px;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    border: 2px solid rgb(99, 110, 114);
    border-radius: 24px;
    z-index: 999999;
    &::after{
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      top: 4px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgb(99, 110, 114);
      border-radius: 50%;
      animation: underArrow 1.4s infinite;
      @keyframes underArrow {
        0%
        {
          opacity: 0;
          top: 4px;
        }
        100%
        {
          opacity: 1;
          top: 22px;
        }
      }
    }
    &::before{
      position: absolute;
    }
    svg{
      position: absolute;
      bottom: -17px;
      color: rgb(99, 110, 114);
      font-size: 14px;
      left: 50%;
      transform: translateX(-50%);
      animation: opaUnderArrow 1.4s infinite;
      @keyframes opaUnderArrow {
        0%
        {
          opacity: 0;
        }
        100%
        {
          opacity: 1;
        }
      }
    }
  }
`

const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export default Home;
