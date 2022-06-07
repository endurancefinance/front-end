import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'
import ButtonMetamaskComponent from '../components/ButtonMetamaskComponent'
import styles from '../styles/Home.module.css'

const Application: NextPage = () => {
  return (
    <div>
      <Navbar />

      <div>
       <ButtonMetamaskComponent/>
      </div>
      
      <main> <h1>Home Page</h1> </main>
      <footer><p>Footer</p></footer>
    </div>
  )
}

export default Application