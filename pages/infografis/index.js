import dynamic from 'next/dynamic'

const InfografisPage = dynamic(() => import("../../src/components/pages/kanal/infografis"))

const Infografis = () => <InfografisPage />

export default Infografis