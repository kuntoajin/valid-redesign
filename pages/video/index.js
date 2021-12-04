import dynamic from 'next/dynamic'

const VideoPage = dynamic(() => import("../../src/components/pages/kanal/video"))

const Video = () => <VideoPage />

export default Video