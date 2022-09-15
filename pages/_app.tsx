import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import LeftTab from '../components/nav';
import RightMarkBox from '../components/RightMark';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LeftTab/>
      <RightMarkBox/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
