import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const theme = extendTheme({ 
  breakpoints,
  fonts: {
    heading: "Montserrat",
    body: "Zilla slab"
  },
  colors: {
    dark: "#33424d",
    orange: "#e56e21"
  },
 })

export default theme