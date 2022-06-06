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
    </div>
  )
}

export default Application