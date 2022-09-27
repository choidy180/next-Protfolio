import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCaretDownFill, BsEmojiHeartEyes, BsEmojiSmile, BsEmojiSunglasses } from 'react-icons/bs';
import VanillaTilt from 'vanilla-tilt';

const Home: NextPage = (props) => {
  const welcomeRef = useRef<HTMLDivElement>(null);
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
        <WelcomBox>
          <p className='redTitle'>Welcome Aboard</p>
          <p className='title'>방문해주셔서 감사합니다</p>
          <p className='subTitle'>웹개발을 전반적으로 다루는 개발 블로그가 되도록 노력하겠습니다.</p>
          <HitBox>
            <div className='card'>
              <div className='content'>
                <h2 className='icon'><BsEmojiHeartEyes/></h2>
                <h3>100</h3>
                <h2 className='name'>방문자</h2>
              </div>
            </div>
            <div className='card'>
              <div className='content'>
                <div className='icon'><BsEmojiSmile/></div>
                <h3>100</h3>
                <h2 className='name'>포스트</h2>
              </div>
            </div>
            <div className='card'>
              <div className='content'>
                <h2 className='icon'><BsEmojiSunglasses/></h2>
                <h3>D+100</h3>
                <h2 className='name'>블로그 운영</h2>
              </div>
            </div>
          </HitBox>
        </WelcomBox>
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
  background-color: rgb(223, 230, 233);
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
    background-color: rgb(245, 246, 250);
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
    background-color:rgb(245, 246, 250);
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
    cursor: pointer;
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

const WelcomBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;
  background-color: rgb(245, 246, 250);
  p{
    width: 100%;
    padding-left: 120px;
  }
  .redTitle{
    width: 100%;
    color: #da1c2a;
    font-weight: 700;
    font-size: 32px;
    font-family: 'GmarketSansMedium';
    letter-spacing: -2px;
    line-height: 32px;
    margin-bottom: 8px;
  }
  .title{
    font-family: 'GmarketSansMedium';
    font-size: 44px;
    line-height: 44px;
  }
  .subTitle{
    font-family: 'GmarketSansMedium';
    font-size: 18px;
  }
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    clip-path: circle(30% at right 70%);
  }
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FAACA8;
    background-image: linear-gradient(19deg, #fbdfde 0%, #eeecf6 100%);
    clip-path: circle(20% at 10% 10%);
  }
`
const HitBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
  .card{
    width: 280px;
    height: 400px;
    margin: 30px;
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(6px);
    .content{
      width: 100%;
      height: 100%;
      padding: 20px;
      transition: 0.5s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 100%;
        font-size: 44px;
        color: #000000;
        pointer-events: none;
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      h3{
        margin-top: 28px;
        font-size: 28px;
        font-family: 'GmarketSansMedium';
      }
      .name{
        margin-top: 14px;
        background-color: rgb(252, 66, 123);
        padding: 2px 14px;
        color: #FFFFFF;
        border-radius: 14px;
      }
      &:hover{
        transform: scale(1.1);
      }
    }
  }
`

export default Home;
