import { NextPage } from "next";
import styled from "styled-components";
import { RiEmotionHappyLine } from "@react-icons/all-files/ri/RiEmotionHappyLine";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Projects: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <TopBox>
        <BgBox/>
        <BlurBox/>
        <TypeAnimation
          sequence={[
            '안녕하세요 :) 설명하는 개발자 김민석입니다.', // Types 'One'
            5000, // Waits 5s
            '',
            1000, // Waits 2s
          ]}
          wrapper="div"
          speed={1}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em', color: '#fff', marginTop: '48px'}}
        />
        <TopImageBox data-aos="flip-up">
          <Image
            src={"/images/background/20220831095524.png"}
            layout={"fill"}
            objectFit={"cover"}
          />
        </TopImageBox>
      </TopBox>
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
const TopBox = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  .emoji{
    font-size: 38px;
    color: #FFFFFF;
    margin-top: -6px;
  }
`
const BgBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  background-image: url("/images/background/20220831095524.png");
  background-size: cover;
  filter: brightness(0.25);
`

const BlurBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
`
const HeadText = styled.div`
  max-width: 80%;
  margin-top: 48px;
  p {
    font-size: 32px;
    color: #FFFFFF;
    line-height: 46px;
  }
`
const TopImageBox = styled.div`
  width: 60%;
  height: 600px;
  background-color: #000000;
  margin-top: 48px;
  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -20px;
    left: -20px;
    border: 1.4px solid #D7D7D7;
    overflow: hidden;
  }
  @media (max-width: 769px) {
    width: 80%;
  }
`
export default Projects;