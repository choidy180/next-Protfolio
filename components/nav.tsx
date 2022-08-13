import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { BsArchive, BsChevronRight, BsEmojiSmile, BsEmojiSunglasses, BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const LeftTab: NextPage = () => {
  return (
    <Container>
      <NavTopBg>
        <Image
          src={"/images/background/âPngtreeâpure watercolor gradient colorful background_964413.jpg"}
          layout="fill"
          objectFit="cover"
        />
      </NavTopBg>
      <ProfileBox>
        <div>
          <Image
            src={"/images/profile/BD7B9E3E-3D35-49F8-B7F6-33EDDF142B02_1_105_c.png"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </ProfileBox>
      <Name>KimMinSeok</Name>
      <SubName>Web Dev</SubName>
      <IconBox>
        <Link href={"/"}>
          <img src="/images/icons/house.png" alt="" />
        </Link>
        <img src="/images/icons/search.png" alt="" />
        <img src="/images/icons/programmer.png" alt="" />
      </IconBox>
      <TabBox>
        <MainHead>MAIN</MainHead>
        <MainUl>
          <Link href={"/skills"}>
            <li>
              <BsEmojiSmile/> 
              Skills
              <BsChevronRight className='rightIcon'/>
            </li>
          </Link>
          <li>
            <BsArchive/>
            Archiving
            <BsChevronRight className='rightIcon'/>
          </li>
          <Link href={"/projects"}>
            <li>
              <BsGithub/>
              Projects
              <BsChevronRight className='rightIcon'/>
            </li>
          </Link>
          <li>
            <BsEmojiSunglasses/>
            Career
            <BsChevronRight className='rightIcon'/>
          </li>
        </MainUl>
      </TabBox>
      {/* <TestTab/> */}
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  width: 270px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
  @media (min-width: 1024px) {
    display: flex;
  }
`

const NavTopBg = styled.div`
  width: calc(100% + 0px);
  height: 100px;
`

const ProfileBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
  overflow: hidden;
  isolation: isolate;
  border-radius: 20px;
  margin-top: -50px;
  div {
    position: absolute;
    width: 93px;
    height: 93px;
    background-color: #000000;
    border-radius: 16px;
    overflow: hidden;
  }
  ::before{
    content: '';
    position: absolute;
    width: 50px;
    height: 150px;
    background: linear-gradient(#52ACFF, #FFE32C);
    animation: iconup 2.5s linear infinite;
    border-radius: 16px;
    overflow: hidden;
  }
  ::after{
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 16px;
    overflow: hidden;
  }
  @keyframes iconup 
  {
    0%
    {
      transform: rotate(0deg);
    }
    100%
    {
      transform : rotate(360deg);
    }
  }
`

const Name = styled.p`
  color: #000000;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -.4px;
  margin-top: 18px;
  line-height: 20px;
`
const SubName = styled.p`
  font-size: 18px;
  color: rgb(52, 73, 94);
  line-height: 18px;
`
const IconBox = styled.div`
  width: 200px;
  padding: 8.5px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-top: 18px;
  border-radius: 28px;
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  img:hover{
    animation: animate .5s linear infinite;
  }
  @keyframes animate {
    0%{
      transform: translateY(0px);
    }
    50%{
      transform: translateY(-5px);
    }
    100%{
      transform: translateY(0px);
    }
  }
`
const TabBox = styled.div`
  width: 100%;
  padding: 28px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const MainHead = styled.p`
  width: 100%;
  font-size: 18px;
  padding-left: 20px;
  animation: mainHeadClude .625s linear infinite;
  @keyframes mainHeadClude {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`
const MainUl = styled.ul`
  width: 100%;
  font-size: 20px;
  padding-top: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    padding-left: 44px;
    transition: all .15s ease-in-out;
    font-weight: 500;
    border-radius: 5.5px;
    overflow: hidden;
    svg{
      position: absolute;
      width: 18px;
      height: 18px;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    .rightIcon{
      width: 14px;
      height: 14px;
      left: 230px !important;
    }
    border-bottom: 1px solid transparent;
  }
  li::after{
    content: "";
    position: absolute;
    left: -100%;
    bottom: 0px;
    display: block;
    width: 100%;
    border-bottom: 1px solid #f00;
    transition: all .7s ease;
  }
  li:hover{
    background-color: #FFF7F4;
    color: #fa4f3f;
  }
  li:hover:after{
    left: 100%;
  }
`

export default LeftTab;
