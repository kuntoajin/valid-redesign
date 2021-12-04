import { ChakraProvider } from "@chakra-ui/react"
// import Header from '../src/components/molecules/Header'
import theme from "../theme"
import dynamic from 'next/dynamic'
import { Global, css } from '@emotion/react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "@fontsource/zilla-slab/700.css"
import "@fontsource/zilla-slab/500.css"
import "@fontsource/zilla-slab/600.css"

import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"

import 'focus-visible/dist/focus-visible'

const Header = dynamic(() => import('../src/components/molecules/Header'))
const Nav = dynamic(() => import('../src/components/molecules/Nav'))
const Footer = dynamic(() => import('../src/components/molecules/Footer'))

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
   h2 {
    font-weight: 700
   }
   .konten > p {
     margin: 20px 0;
     font-size: 18px;
   }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Nav />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp