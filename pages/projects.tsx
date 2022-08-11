import { NextPage } from "next";
import styled from "styled-components";
import { RiEmotionHappyLine } from "@react-icons/all-files/ri/RiEmotionHappyLine";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <TopBox>
        <BgBox/>
        <BlurBox/>
        <TopBar>
          <p className="name">김민석</p>
          <RiEmotionHappyLine className="emoji"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p style={{marginTop: "6px"}}>Web Developer</p>
        </TopBar>
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
const TopBar = styled.div`
  width: calc(100% - 60px);
  padding: 14px;
  padding-left: 144px;
  background-color: #051D25;
  margin-top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 42px;
    font-family: 'MabinogiClassicR';
    color: #FFFFFF;
  }
`
export default Projects;