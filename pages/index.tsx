import type { NextPage } from 'next'
import { useEffect } from 'react'
import styled from 'styled-components'
import LeftTab from '../components/nav'
import AOS from "aos";
import "aos/dist/aos.css";
const Home: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <LeftTab/>
      <Box>
        <TopBox data-aos="fade-left">
          <video src="/images/background/ì__ì_¤ ì½_ë__ - 4733.mp4" autoPlay muted loop/>
          <div>
            <h1>안녕하세요. 개발자 김민석입니다...</h1>
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
  div::before{
    content:'';
    position: absolute;
    top: -2px;
    right: -8px;
    width: 2px;
    height: 42px;
    background-color: #FFFFFF;
    animation: blinkCursor 0.8s steps(3) infinite;
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
  div {
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
`

export default Home
