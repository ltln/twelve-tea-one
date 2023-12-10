import Image from 'next/image'
import styles from './page.module.css'
import NavigationBar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <NavigationBar />
    <h1>Hello world!</h1>
    </>
  )
}
