import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import LeftTab from '../components/nav';
import RightMarkBox from '../components/RightMark';
import { useEffect, useState } from 'react';

export interface scrollProps{
  scroll: {top: boolean};
}

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = useState<scrollProps['scroll']>({top: false});
  useEffect(()=>{
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
      <LeftTab/>
      <RightMarkBox/>
      <Component {...pageProps} {...scroll} />
    </>
  )
}

export default MyApp
