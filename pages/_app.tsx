import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import LeftTab from '../components/nav';
import RightMarkBox from '../components/RightMark';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export interface scrollProps{
  scroll: {top: boolean};
}

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState<scrollProps['scroll']>({top: false});
  useEffect(()=>{
    console.log("조회수 업데이트");
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
  const handleScroll = () => {
    if(window.scrollY + 600 >= window.innerHeight){
      setScroll({top: true});
    } else {
      setScroll({top: false});
    }
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next-basics | Next</title>
        <link rel="shortcut icon" href="../images/icons/favicon.ico" />
      </Head>
      <LeftTab/>
      <RightMarkBox/>
      <Component {...pageProps} {...scroll} />
    </>
  )
}

export default MyApp
