import { NextPage } from 'next';
import styled from 'styled-components';
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { scrollProps } from '../pages/_app';


const RightMarkBox: NextPage = (props:scrollProps) => {
  return (
    <RightMark className={props ? 'top' : ''} onClick={()=> window.open('https://github.com/choidy180')}>
      <FiGithub/>
      <span>Github</span>
    </RightMark>
  )
}

export const RightMark = styled.div`
  position: fixed;
  top: 50%;
  right: 0px;
  z-index: 9999;
  transform: translateY(-50%);
  width: 100%;
  display  : flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFFFF;
  width: 28px;
  padding: 10px 0;
  font-size: 14px;
  height: 84px;
  transition: all .15s ease-in-out;
  cursor: pointer;
  svg{
    transform: scale(1.1);
    transition: all .15s ease-in-out;
  }
  span{
    margin-top: 18px;
    transform: rotate(270deg);
    margin-left: -1px;
  }
  &:hover{
    color: rgb(236, 240, 241);
    text-shadow: 
    0 0 1px #03bcf4,
    0 0 1.75px #03bcf4,
    0 0 2.5px #03bcf4,
    0 0 5px #03bcf4, 
    0 0 10px #03bcf4;
    svg{
      color: #03bcf4;
    }
  }
  &.top{
    background-color: #141414;
    color: #FFFFFF;
  }
`

export default RightMarkBox;