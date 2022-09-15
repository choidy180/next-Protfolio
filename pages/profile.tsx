import { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WavesGround from "../components/wavesGround";
import { BsChevronDown } from "react-icons/bs";
const Profile: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <WavesGround/>
      <TopBox>
        <HeadText>
          <h1>안녕하세요. 설명하는 개발자 김민석입니다</h1>
          <h2>효율적이고 합리적인 개발방향을 추구합니다</h2>
          <div className="btnBox">
            <div className="circle"></div>
          </div>
          <BsChevronDown className="downArrow"/>
        </HeadText>
      </TopBox>
      <Box>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  scroll-snap-type:y mandatory;
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`
const TopBox = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  scroll-snap-align: start;
`
const HeadText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 24px;
    line-height: 22px;
    color: rgb(44, 62, 80);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
    outline: none;
    animation: animate 5s linear infinite;
  }
  h2{
    margin-top: 32px;
    font-size: 20px;
    color: rgb(236, 240, 241);
    background-color: rgb(255, 77, 77);
    padding: 2px 12px;
    line-height: 26px;
    border-radius: 8px;
  }
  @keyframes animate {
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%
    {
      color: rgb(44, 62, 80);
      box-shadow: none;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%
    {
      color: rgb(236, 240, 241);
      text-shadow: 0 0 10px #03bcf4,
      0 0 20px #03bcf4,
      0 0 40px #03bcf4,
      0 0 80px #03bcf4, 
      0 0 160px #03bcf4;
    }
  }
  .btnBox{
    width: 42px;
    height: 64px;
    border: 3px solid rgb(236, 240, 241);
    margin-top: 28px;
    border-radius: 36px;
    opacity: 0.8;
    .circle{
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      width: 10px;
      height: 10px;
      background-color: rgb(236, 240, 241);
      border-radius: 50%;
      opacity: 0;
      animation: animateCircle 2s linear infinite;
    }
  }
  .downArrow{
    margin-top: 12px;
    font-size: 32px;
    color: rgb(236, 240, 241);
    font-weight: bold;
    animation: downArrowAnimation 2s linear infinite;
  }
  @media (max-width: 1024px) {
    width: auto;
    margin-top: 48px;
    padding-left: 0px;
    h1{
      font-size: 32px;
      width: auto;
    }
  }
  @media (max-width: 768px) {
    h1{
      font-size: 24px;
    }
  }
  @keyframes animateCircle {
    0% {
      transform: translateX(-50%) translateY(10px);
    }
    50%{
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(36px);
    }
  }
  @keyframes downArrowAnimation {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`

const Box = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 100vh;
  opacity: .1;
  scroll-snap-align: start;
`
export default Profile;