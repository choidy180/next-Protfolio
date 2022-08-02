import type { NextPage } from 'next'
import Image from 'next/image'
import styled from 'styled-components'

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
        <Image
          src={"/images/icons/house.png"}
          width="24px"
          height={"24px"}
        />
      </IconBox>
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
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
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
    animation: animate 2.5s linear infinite;
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
  @keyframes animate 
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
  font-family: 'MabinogiClassicR';
  line-height: 20px;
`
const SubName = styled.p`
  font-size: 18px;
  color: rgb(52, 73, 94);
  line-height: 18px;
  font-family: 'MabinogiClassicR';
`
const IconBox = styled.div`
  width: 200px;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-top: 18px;
  border-radius: 28px;
`

export default LeftTab;
