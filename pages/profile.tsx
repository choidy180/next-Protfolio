import { NextPage } from "next";
import styled from "styled-components";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { RiVimeoLine } from "@react-icons/all-files/ri/RiVimeoLine";
import WavesGround from "../components/wavesGround";

const Profile: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <Container>
      <WavesGround/>
      <TopBox>
        <HeadText>
          <h1>안녕하세요. 설명하는 개발자 김민석입니다.</h1>
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
  height: 100%;
  padding-top: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  .emoji{
    font-size: 38px;
    color: #FFFFFF;
    margin-top: -6px;
  }
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
  div{
    max-width: 440px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 18px;
    margin-top: 48px;
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      padding: 4px 0;
      font-size: 20px;
      border: 2px solid #FFF;
      outline: none;
      color: #fff;
      background: transparent;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
      gap: 4px;
      background-color: transparent;
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
export default Profile;