import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLink } from "@react-icons/all-files/fi/FiLink";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";

interface contentInterface {
  img: string,
  title: string,
  stack: string[],
  maker: string,
  link: string[],
  githubSrc: string,
  velogSrc: string,
  src: string,
}

const Projects: NextPage = () => {
  const [scrollY, setScrollY] = useState<Boolean>(true);
  const projectContent:contentInterface[] = [
    {
      img: '/images/content/file-20180820-30593-1nxanpj.png',
      title: '실시간 날씨 정보를 활용한 코디 추천',
      stack: ["ReactJS", "MySQL", "JavaScript", "OpenWeather"],
      maker: "김민석, 황채영(디자이너)",
      link: ["github"],
      githubSrc: "https://github.com/choidy180?tab=repositories",
      velogSrc: "",
      src: ""

    },
    {
      img: '/images/content/11-bookstores-6-three-lives-2.w710.h473.2x.jpg',
      title: '온라인 서점 사이트',
      stack: ["Node.js", "JavaScript", "MySQL", "EJS", "JWT", "SQL"],
      maker: "김민석",
      link: ["github"],
      githubSrc: "https://github.com/choidy180?tab=repositories",
      velogSrc: "",
      src: ""
    },
    {
      img: '/images/content/99AC933F5B021AE611.jpg',
      title: '면접 플랫폼 데이터 수집 시스템 구축',
      stack: ["PHP","C#","Phthon","BeautifulSoup"],
      maker: "김민석",
      link: ["company"],
      githubSrc: "",
      velogSrc: "",
      src: "https://highbuff.com/interview.php"
    },
    {
      img: '/images/content/videoplayer123910.jpg',
      title: '안드로이드 비디오플레이어앱',
      stack: ["Android", "FFmpeg", "Ndk"],
      maker: "김민석",
      link: ["github"],
      githubSrc: "https://github.com/choidy180/2021_android_video_player",
      velogSrc: "",
      src: ""
    },
    {
      img: '/images/content/population.jpg',
      title: 'Echarts',
      stack: ["PHP", "JavaScript", "Echarts"],
      maker: "김민석",
      link: ["github"],
      githubSrc: "https://github.com/choidy180/echarts",
      velogSrc: "",
      src: ""
    },
    {
      img: '/images/content/8fc78844-26c4-4753-8272-ccde87a07841_2000_1333.webp',
      title: '온라인 전시회 플랫폼(2021)',
      stack: ["JavaScript", "YOLO", "Python", "Node.js", "MySQL"],
      maker: "김민석",
      link: ["github"],
      githubSrc: "https://github.com/choidy180/nodejs_an_online_exhibition",
      velogSrc: "",
      src: ""
    },
  ]
  useEffect(()=> {
    AOS.init();
    window.addEventListener('scroll', (event) => {
      if(document.documentElement.scrollTop === 0){
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    })
  })
  return (
    <Container>
      <FirstBox>
        <h1 
          className="topH1" 
          style={scrollY ? {transform : 'scale(100%)', height: '50px'} : {transform : 'scale(0)',  height: '0px'}
        }>
          EXPLANATORY DEVELOPER
        </h1>
        <ProjectNav
          style={scrollY ? {paddingTop: '18px'} : {paddingTop: '12px'}}
        >
          <span>JAVASCRIPT</span>
          <span>NODE.JS</span>
          <span>REACT.JS</span>
          <span>DESIGN</span>
        </ProjectNav>
        {/* <video src="/images/background/ì__ì_¤ ì½_ë__ - 4733.mp4" autoPlay muted loop/>
        <p className="title">Intuitive And Efficient Development</p>
        <span className="subTitle">직관적이고 효율적인 개발을 지향합니다</span> */}
      </FirstBox>
      <ContentBox>
        {projectContent.map((content, i) => (
          <Content key={i}>
            <ContentImageBox>
              <div data-aos="zoom-in-up">
                <Image
                  src={content.img}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </ContentImageBox>
            <div className="box">
              <p className="title">{content.title}</p>
              <p className="skills">
                {content.stack.map((stack, i) => (
                  <span className="skill" key={i}>{stack}</span>
                ))}
              </p>
              <p className="maker">
                팀 구성 - {content.maker}
              </p>
              <p className="link">
                {content.githubSrc && (
                    <button className="github" onClick={()=> window.open(`${content.githubSrc}`)}>
                      <FiGithub/>GitHub <AiOutlineRight style={{marginLeft: "12px"}}/>
                    </button>
                  )
                }
                {content.src && (
                    <button className="github" onClick={()=> window.open(`${content.src}`)}>
                      <FiLink/>Company <AiOutlineRight style={{marginLeft: "22px"}}/>
                    </button>
                  )
                }
              </p>
            </div>
          </Content>
        ))}
      </ContentBox>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 140px;
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`
const FirstBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .topH1{
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    transition: all .3s ease-in-out;
    letter-spacing: -.8px;
    background-color: rgba(97,186,255,1);
    background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #000;
    animation: shine 6s linear infinite;
  }
  video {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    filter: brightness(60%);
  }
  .title{
    position: absolute;
    left: 48px;
    bottom: 48px;
    z-index: 999;
    color: white;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 52px;
    background-color: #FFDEE9;
    background: linear-gradient(270deg, #FFDEE9 0%, #B5FFFC 100%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -1.8px;
    color: #000;
    animation: shine 4s linear infinite;
  }
  .subTitle{
    position: absolute;
    left: 48px;
    bottom: 8px;
    z-index: 999;
    color: white;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 36px;
  }
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`
const ProjectNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 12px;
  span {
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -.4px;
    padding: 0px 0;
    cursor: pointer;
    transition: all .1s ease-in-out;
    border-bottom: 2px solid transparent;
    ::after{
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: #141414;
      transition: all .22s ease-in-out;
    }
    &:hover{
      ::after{
        width: 100%;
      }
    }
  }
`
const ContentBox = styled.div`
  width: calc(100% - 40px);
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  gap: 30px;
  row-gap: 70px;
`
const Content = styled.div`
  width: 330px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 12px;
  overflow: hidden;
  transition: all ease-in-out .15s;
  .box{
    width: 100%;
    height: 100%;
  }
  .title{
    width: 100%;
    font-size: 20px;
    letter-spacing: -1px;
    word-spacing: 1.2px;
    margin-top: 6px;
    padding: 0 12px;
  }
  .skills{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
    padding: 0 12px;
  }
  .skill{
    background-color: rgb(223, 249, 251);
    padding: 0px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: rgb(34, 47, 62);
  }
  .maker {
    margin-top: 8px;
    font-size: 14px;
    padding: 0 16px;
  }
  .link {
    position: absolute;
    bottom: 12px;
    width: 100%;
    margin-top: 24px;
    padding: 0 12px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 2px 5.5px;
      border-radius: 4px;
      background-color: rgb(45, 52, 54);
      background-color: rgb(245, 246, 250);
      color: rgb(52, 73, 94);
      font-size: 14px;
      &:hover{
        background-color: rgb(223, 249, 251);
        color: rgb(52, 73, 94);
      }
    }
  }
  @media (max-width: 1024px) {

  }
  &:hover{
    cursor: pointer;
    transform: translateY(-8px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: rgb(245, 246, 250);
  }
`
const ContentImageBox = styled.div`
  width: 100%;
  padding-top: 60%;
  overflow: hidden;
  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;
    img {
      transition: all .2s ease-in-out;
    }
    img:hover{
      transform: scale(1.04);
      cursor: pointer;
    }
  }
`
export default Projects;