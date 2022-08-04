import { NextPage } from "next";
import styled from "styled-components";

const Skills: NextPage = () => {
  return(
    <Container>
      <p className="title">Have Skills</p>
      <div/>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  .title{
    font-family: 'MabinogiClassicR';
    font-size: 52px;
    background-color: #FFFFFF;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient 3s ease infinite;
  }
  @keyframes gradient {
    0% {
		background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
  div {
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    cursor: pointer;
    transition: all .12s ease-in-out;
    border-radius: 8px;
  }
  div:hover{
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`
export default Skills;