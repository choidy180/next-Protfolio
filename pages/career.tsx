import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import { AutoHeightImageWrapper } from "../components/AutoHeightImageWrapper";

const Career: NextPage = () => {
  return (
    <Container>
      <AutoHeightImageWrapper>
        <Image
          src={"/images/background/20220831095524.png"}
          layout={"fill"}
          objectFit={"cover"}
          className={"autoImage"}
        />
      </AutoHeightImageWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: black;
  @media (min-width: 1024px) {
    padding-left: 270px;
  }
`
export default Career;