import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WavesGround: NextPage = (title) => {
  const [scroll, setScroll] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
  const handleScroll = () => {
    if(window.scrollY + 600 >= window.innerHeight){
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  return (
    <WavesContainer className={scroll ? 'dark' : ''}>
      <div className='wave wave1'></div>
      <div className='wave wave2'></div>
      <div className='wave wave3'></div>
      <div className='wave wave4'></div>
    </WavesContainer>
  )
}

const WavesContainer = styled.section`
  * {
    margin: 0;
    padding: 0;
  }
  position: absolute;
  top: 0;
  width: 100%;
  min-height: calc(100vh - 100px);
  overflow: hidden;
  background-color: #3C40C6;
  &#dark{
    filter: invert(100%);
  }
  /* wave */
  .wave{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url('/images/background/wave.png');
    background-size: 1000px 100px;
  }
  .wave.wave1{
    animation: animate 8s linear infinite;
    z-index: 1000;
    opacity: 1;
    animation-delay: 0s;
    bottom: -10px;
  }
  .wave.wave2{
    animation: animate2 4s linear infinite;
    z-index: 999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
  }
  .wave.wave3{
    animation: animate 8s linear infinite;
    z-index: 998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15;
  }
  .wave.wave4{
    animation: animate2 4s linear infinite;
    z-index: 997;
    opacity: 0.7;
    animation-delay: -5s;
    bottom: 20px;
  }
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -2000px;
    }
  }
  @keyframes animate2 {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -1000px;
    }
  }
`

export default WavesGround;