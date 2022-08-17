import { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { AutoHeightImageWrapper } from "../components/AutoHeightImageWrapper";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub"
import { RiVimeoLine } from "@react-icons/all-files/ri/RiVimeoLine"

const Profile: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <TopBox>
        <BgBox/>
        <BlurBox/>
        <HeadText>
          <h1 className="max">안녕하세요 :) <br/>설명하는 개발자 김민석입니다.</h1>
          <h1 className="min">안녕하세요 :) 설명하는 개발자 김민석입니다.</h1>
          <div className="btnBox" id="mobileHead">
            <button onClick={()=> window.open('https://github.com/choidy180')}><FiGithub/>GITHUB</button>
            <button onClick={()=> window.open('https://velog.io/@choidy180')}><RiVimeoLine/>BLOG</button>
          </div>
        </HeadText>
        <ImageBox data-aos="flip-left">
          <AutoHeightImageWrapper 
            style={{
            marginTop: '48px',
            }
          }>
            <Image
              src={"/images/background/20220831095524.png"}
              layout={"fill"}
              objectFit={"cover"}
              className={"autoImage boxline"}
            />
          </AutoHeightImageWrapper>
        </ImageBox>
        <HeadText className="mobileHead">
          <div className="btnBox">
            <button onClick={()=> window.open('https://github.com/choidy180')}><FiGithub/>GITHUB</button>
            <button onClick={()=> window.open('https://velog.io/@choidy180')}><RiVimeoLine/>BLOG</button>
          </div>
        </HeadText>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .emoji{
    font-size: 38px;
    color: #FFFFFF;
    margin-top: -6px;
  }
  .min{
    display: none;
  }
  #mobileHead{
    display: flex;
  }
  .mobileHead{
    width: 100%;
    display: none;
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    .max{
      display: none;
    }
    .min{
      display: block;
    }
    #mobileHead{
      display: none;
    }
    .mobileHead{
      display: flex;
    }
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
  width: 50%;
  margin-top: 48px;
  padding-left: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 42px;
    line-height: 48px;
    background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab,#ee7752);
    background-size: 200% auto;
    color: #000;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1.8px;
    animation: shine 2.5s linear infinite;
    @keyframes shine {
      to {
        background-position: 200% center;
      }
    }
  }
  div{
    width: 90%;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 18px;
    padding-top: 24px;
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 8.5px 0;
      font-size: 24px;
      border: 2px solid #FFF;
      outline: none;
      color: #fff;
      background: transparent;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      gap: 4px;
    }
    button:before {
      content: '';
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      position: absolute;
      top: -2px;
      left:-2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      border-radius: 10px;
    }
    button:active{
      color: #000;
    }
    button:active:after {
      background: transparent;
    }
    button:hover:before {
      opacity: 1;
    }
    button:after {
      z-index: -1;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #111;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
    @keyframes glowing {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
    }
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
`
const ImageBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  div{
    width: 90%;
  }
  span::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: -20px;
    left: -20px;
    border: 1.4px solid #D7D7D7;
    z-index: 9999;
  }
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
export default Profile;