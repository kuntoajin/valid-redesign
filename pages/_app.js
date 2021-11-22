import { ChakraProvider } from "@chakra-ui/react"
// import Header from '../src/components/molecul/Header'
import theme from "../theme"
import dynamic from 'next/dynamic'
import { Global, css } from '@emotion/react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "@fontsource/zilla-slab/700.css"
import "@fontsource/zilla-slab/500.css"
import "@fontsource/zilla-slab/600.css"

import "@fontsource/Montserrat/600.css"
import "@fontsource/Montserrat/700.css"

import 'focus-visible/dist/focus-visible'

const Header = dynamic(() => import('../src/components/molecul/Header'))
const Nav = dynamic(() => import('../src/components/molecul/Nav'))
const Footer = dynamic(() => import('../src/components/molecul/Footer'))

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
   h2 {
    font-weight: 700
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