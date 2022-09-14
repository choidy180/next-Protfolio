import { NextPage } from "next";
import styled from "styled-components";
import WavesGround from "../components/wavesGround";

const Dev: NextPage = () => {
  return (
    <Container>
      <WavesGround/>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`
export default Dev;