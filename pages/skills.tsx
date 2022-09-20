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
    {name: "REACT", color: "#61DAFB", percent: "95", link: "https://github.com/choidy180?tab=repositories&q=react&type=&language=&sort="},
    {name: "TYPESCRIPT", color: "#3077C6", percent: "87", link: "https://github.com/choidy180?tab=repositories&q=&type=&language=typescript&sort="},
    {name: "AWS", color: "#FF9902", percent: "88", link: ""},
    {name: "FIREBASE", color: "#FCCA3F", percent: "92", link: ""},
    {name: "REACT-QUERY", color: "#F23E4F", percent: "93", link: ""},
    {name: "REACT-ROUTER", color: "#EC4546", percent: "93", link: ""},
    {name: "JAVASCRIPT", color: "#F7E017", percent: "98", link: "https://github.com/choidy180?tab=repositories&q=&type=&language=javascript&sort="},
    {name: "NODE-JS", color: "#7DC327", percent: "94", link: "https://github.com/choidy180?tab=repositories&q=node&type=&language=javascript&sort="},
    {name: "HTML5", color: "#D84A24", percent: "99", link: "https://github.com/choidy180?tab=repositories&q=&type=&language=html&sort="},
    {name: "CSS3", color: "#2465F1", percent: "99", link: "https://github.com/choidy180?tab=repositories&q=&type=&language=css&sort="},
    {name: "MYSQL", color: "#016089", percent: "92", link: ""},
    {name: "MARIADB", color: "#313E62", percent: "92", link: ""},
    {name: "MONGO-DB", color: "#91DC50", percent: "88", link: ""},
    {name: "SASS", color: "#CD669A", percent: "88", link: ""},
    {name: "NEXTJS", color: "#000000", percent: "93", link: "https://github.com/choidy180?tab=repositories&q=next&type=&language=&sort="},
    {name: "TAILWIND-CSS", color: "#00B8D5", percent: "93", link: "https://github.com/choidy180?tab=repositories&q=tail&type=&language=&sort="},
  ]
  return(
    <Container>
      <p className="title">Have Skill</p>
      <Line>
        <ContentBox data-aos="fade-up">
          {skill.map((data, i) => (
            <SkillBox key={i} color={data.color}>
              <Image
                width={"100px"}
                height={"100px"}
                src={`/images/stack/${data.name}.png`}
                onClick={()=> {
                  if(data.link !== ""){
                    window.open(data.link);
                  }
                }}
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
  padding: 60px 0 0 0;
  section{
    filter: blur(0px);
  }
  .title{
    font-size: 20px;
    color: #FFFFFF;
    background-color: rgb(255, 77, 77);
    padding: 2px 12px;
    line-height: 26px;
    border-radius: 8px;
  }
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px;
`

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  max-width: 1240px;
  padding: 20px 0;
  gap: 20px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`
const SkillBox = styled.div`
  padding: 12px 16px;
  width: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background-color: white;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border: 3px solid transparent;
  gap: 6px;
  .name{
    margin-top: 12px;
    font-size: 16px;
    line-height: 16px;
  }
  .percent{
    line-height: 16px;
    color: #525252;
    font-size: 20px;
  }
  &:hover{
    border: 2px solid ${props => props.color};
    box-shadow: ${props => props.color} 0px 3px 8px;
    transform: translateY(-4px);
  }
`

export default Skills;