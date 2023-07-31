import { Montserrat_Alternates } from 'next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const inter = Montserrat_Alternates({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ['latin'], })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar/>
      <Hero/>
    </main>
  )
}
