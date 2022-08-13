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
        <HeadText data-aos="fade-right">
          <p>끊임없이 설명하고<br/>부지런하게 실행하는<br/>개발자 김민석입니다</p>
        </HeadText>
        <TopImageBox>

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
  width: calc(100% - 60px);
  padding: 14px;
  padding-left: 144px;
  margin-top: 32px;
  top: 40%;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 42px;
    color: #FFFFFF;
    line-height: 52px;
  }
`
const TopImageBox = styled.div`
  width: 700px;
  height: 400px;
  background-color: red;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 85px;
`
export default Projects;