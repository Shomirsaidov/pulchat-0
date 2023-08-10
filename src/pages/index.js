import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopTitle from './components/topBar'
import Navigator from './components/navigation'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TopTitle/>
      <h1 className='text-2xl font-black text-center'>Fuck you cons & losers from IT Run and Murodjon !</h1>    
      <Navigator/>
    </>
  )
}
