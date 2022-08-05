import { NextPage } from "next";
import styled from "styled-components";

const Skills: NextPage = () => {
  return(
    <Container>
      <p className="title">Have Skills</p>
      <Line>
        <ContentTitle>Frontend</ContentTitle>
        <ContentSubTitle>제가 사용할 수 있는 웹 프론트앤드 스킬입니다.</ContentSubTitle>
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
  padding: 40px 20px;
`
const ContentTitle = styled.p`
  width: 100%;
  font-size: 48px;
  font-family: 'MabinogiClassicR';
  background-color: #FFFFFF;
  background-image: linear-gradient(to right, #6284FF 50%, #FF0000 100%);
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1.8px;
  animation: shineFrontend 2.5s linear infinite;
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

export default Skills;