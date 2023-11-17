import { Inter, Poppins, Exo_2 } from 'next/font/google'
import NavBar from '@/components/Navbar'
import Hero from '@/components/Home/Hero'
import Technologies from '@/components/Home/Technologies'
import Services from '@/components/Home/Services'
import Experts from '@/components/Home/Experts'
import Partners from '@/components/Home/Partners'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className} ${poppins.className}`}>
      <NavBar />
      <Hero />
      <Technologies />
      <Services />
      <Experts />
      <Partners />
      <Footer />
    </main>
  )
}
