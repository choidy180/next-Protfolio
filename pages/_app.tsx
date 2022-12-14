import * as React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import LeftTab from '../components/nav';
import RightMarkBox from '../components/RightMark';
import Head from 'next/head';
import { addDoc, collection, getDocs, serverTimestamp, Timestamp } from '@firebase/firestore';
import { dbService } from '../firebase/firebase';
import { LeftBottomBox } from '../components/LeftBottomBox';
import { ThemeProvider } from 'styled-components';
import { basicTheme } from '../enum/ThemeEnums';
import { RecoilRoot, useRecoilState } from 'recoil';

export interface scrollProps{
  scroll: {top: boolean};
}

function MyApp({ Component, pageProps }: AppProps) {
  const [scroll, setScroll] = React.useState<scrollProps['scroll']>({top: false});

  const hitUpdate = async () => {
    const hitRef = await addDoc(collection(dbService, 'hit'),{
      date:serverTimestamp(),
    })
  }
  const hitGet = async () => {
    const hitRef = await (await getDocs(collection(dbService, 'hit'))).size;
    console.log(hitRef);
  }
  React.useEffect(()=> {
    hitUpdate();
    hitGet();
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
      <ThemeProvider theme={basicTheme}>
        <RecoilRoot>
          {/* <LeftTab/> */}
          <RightMarkBox/>
          <Component {...pageProps} {...scroll} />
          <LeftBottomBox/>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default MyApp
