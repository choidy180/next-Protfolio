import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills: NextPage = () => {
  useEffect(()=>{
    AOS.init();
  })
  const skill = [
    {name: "REACT", color: "#61DAFB", percent: "95",},
    {name: "TYPESCRIPT", color: "#3077C6", percent: "87"},
    {name: "AWS", color: "#FF9902", percent: "88"},
    {name: "FIREBASE", color: "#FCCA3F", percent: "92"},
    {name: "REACT-QUERY", color: "#F23E4F", percent: "93"},
    {name: "REACT-ROUTER", color: "#EC4546", percent: "93"},
    {name: "JAVASCRIPT", color: "#F7E017", percent: "98"},
    {name: "NODE-JS", color: "#7DC327", percent: "94"},
    {name: "HTML5", color: "#D84A24", percent: "99"},
    {name: "CSS3", color: "#2465F1", percent: "99"},
    {name: "MYSQL", color: "#016089", percent: "92"},
    {name: "MARIADB", color: "#313E62", percent: "92"},
    {name: "MONGO-DB", color: "#91DC50", percent: "88"},
    {name: "SASS", color: "#CD669A", percent: "88"},
    {name: "NEXTJS", color: "#000000", percent: "93"},
    {name: "TAILWIND-CSS", color: "#00B8D5", percent: "93"},
  ]
  return(
    <Container>
      <p className="title">Have Skills</p>
      <Line>
        <ContentTitle>Platforms & Languages </ContentTitle>
        <ContentSubTitle>제가 사용할 수 있는 STACK입니다.</ContentSubTitle>
        <ContentBox data-aos="fade-up">
          {skill.map((data, i) => (
            <SkillBox key={i} color={data.color}>
              <Image
                width={"100px"}
                height={"100px"}
                src={`/images/stack/${data.name}.png`}
              />
              <p className="name">{data.name}</p>
              <p className="percent">{data.percent}%</p>
            </SkillBox>
          ))}
        </ContentBox>
      </Line>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  .title{
    font-family: 'MabinogiClassicR';
    font-size: 52px;
    background-color: #FFFFFF;
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
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
  /* div {
    width: 120px;
    height: 120px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor: pointer;
    transition: all .12s ease-in-out;
    border-radius: 8px;
  }
  div:hover{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  } */
`

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px;
`
const ContentTitle = styled.p`
  width: 100%;
  font-size: 48px;
  font-family: 'MabinogiClassicR';
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1.8px;
  animation: shineFrontend 4.3s linear infinite;
  line-height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @keyframes shineFrontend {
    to {
      background-position: 200% center;
    }
    0%, 33%, 66%, 99%
    {
      transform: translateY(0px);
    }
    16.5%, 54.6%, 83.3%
    {
      transform: translateY(-3px);
    }
  }
`
const ContentSubTitle = styled.p`
  width: 100%;
  color: #7b7b7b;
  font-family: 'MabinogiClassicR';
`

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  gap: 20px;
`
const SkillBox = styled.div`
  padding: 12px 20px;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border: 3px solid transparent;
  gap: 6px;
  .name{
    margin-top: 12px;
    font-size: 16px;
    font-family: 'MabinogiClassicR';
    line-height: 16px;
  }
  .percent{
    line-height: 16px;
    font-family: 'MabinogiClassicR';
    color: #525252;
    font-size: 20px;
  }
  &:hover{
    border: 2px solid ${props => props.color};
    box-shadow: ${props => props.color} 0px 5px 15px;
    transform: translateY(-4px);
  }
`

export default Skills;