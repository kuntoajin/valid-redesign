import { memo } from "react"
import dynamic from "next/dynamic"

const About = dynamic(() => import("../../molecules/about"))

const AboutPage = memo(() => <About />)

export default AboutPage