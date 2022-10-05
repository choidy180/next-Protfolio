import { NextPage } from "next";
import * as React from 'react';
import styled from "styled-components";

export const LeftBottomBox: NextPage = () => {
    return (
      <Box>DESIGNED BY MINSEOK</Box>
    )
}

const Box = styled.div`
    position: fixed;
    z-index: 9999999;
    font-family: 'GmarketSansMedium';
    font-size: 14px;
    padding: 2.5px 8px;
    background-color: #FFFFFF;
    color: #000000;
    left: 40px;
    bottom: 30px;
    border-radius: 14px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all .25s ease-in-out;
    transform-origin: 0;
    @media (max-width: 1280px) {
        transform: rotate(-90deg);
    }
`