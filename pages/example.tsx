import { NextPage } from "next";
import * as React from 'react';
import styled from "styled-components";
import AOS from "aos";

const Example: NextPage = () => {
  const [absoluteBoxView, setAbsoluteBoxView] = React.useState(true);
  React.useEffect(()=>{
    AOS.init();
  })
  return(
    <Container>
      <AbsoluteBox>
        <AbsoluteMainBox>
          <div className="box" id={absoluteBoxView ? "" : "right"}>
            <div className="wrapper blue">
              <img className="one" data-aos="flip-left" src="/images/profile/KakaoTalk_Photo_2022-10-04-17-17-18.png" alt="" />
              <p data-aos="fade-up">안녕하세요</p>
            </div>
            <div className="wrapper red">
              <img className="two" data-aos="flip-left" src="/images/profile/KakaoTalk_Photo_2022-10-04-17-05-15.png" alt="" />
            </div>
          </div>
          <AbsoluteBtnBox>
            <div id="blue" className={absoluteBoxView ? 'focus' : ''} onClick={()=> setAbsoluteBoxView((e)=>!e)}/>
            <div id="purple" className={absoluteBoxView ? '' : 'focus'} onClick={()=> setAbsoluteBoxView((e)=>!e)}/>
          </AbsoluteBtnBox>
        </AbsoluteMainBox>
        <AbsoluteTitleBack>
          <h2>communicative<br/>developer</h2>
          <p><b color={absoluteBoxView ? "rgb(116, 185, 255)" : "rgb(162, 155, 254)"}>방문해주셔서 감사합니다</b><br/>웹개발을 전반적으로 다루는 개발 블로그가 되도록 노력하겠습니다</p>
        </AbsoluteTitleBack>
      </AbsoluteBox>
      <Box color="#FFFFFF">
        <p>2</p>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`
const Box = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.color};
  z-index: 15;
`
const AbsoluteBox = styled.div`
  position: sticky; 
  width: 100%;
  height: 100%;
  top: 0;
  scroll-snap-align: center;
  z-index: 10;
`
const AbsoluteMainBox = styled.div`
  position: absolute;
  width: 500px;
  height: 100%;
  left: 140px;
  display: flex;
  overflow: hidden;
  .box{
    width: auto;
    height: 100vh;
    display: flex;
    transition: all ease-in-out .15s;
    &#right{
      transform: translateX(-500px);
    }
  }
  .wrapper{
    flex-shrink: 0;
    width: 500px;
  }
  img{
    position: absolute;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    pointer-events: none;
    &.two{
      width: 100%;
    }
  }
  .blue{
    background-color: rgb(116, 185, 255);
  }
  .red{
    background-color: rgb(162, 155, 254);
  }
`
const AbsoluteBtnBox = styled.div`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  div{
    width: 54px;
    height: 6px;
    background-color: #FFFFFF;
    cursor: pointer;
    &.focus#blue{
      background-color: rgb(116, 185, 255);
      cursor: auto;
    }
    &.focus#purple{
      background-color: rgb(162, 155, 254);
      cursor: auto;
    }
  }
`
const AbsoluteTitleBack = styled.div`
  position: absolute;
  top: calc(50%);
  right: 0;
  transform: translateY(-50%);
  width: calc(100% - 680px);
  h2{
    position: absolute;
    font-family: 'GmarketSansMedium';
    text-transform: uppercase;
    font-size: 6em;
    line-height: 1em;
    letter-spacing: -6px;
    color: #f5f6f9;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
  }
  p{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'GmarketSansMedium';
    font-size: 20px;
    line-height: 27px;
    b{
      font-size: 44px;
      line-height: 44px;
      color: ${props=>props.color};
    }
  }
`
export default Example;