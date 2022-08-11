import { NextPage } from "next";
import styled from "styled-components";

const Projects: NextPage = () => {
  return (
    <Container>
      <TopBox>
        <BgBox/>
        <BlurBox/>
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

export default Projects;