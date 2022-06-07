import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/navbar'
import { Web3Address } from '../components/Web3Address'
import { Web3Button } from '../components/Web3Button'
import styles from '../styles/Home.module.css'

const Application: NextPage = () => {
  return (
    <div>
      <Navbar />

      <main className="grow p-8 text-center">
        <h1 className="pb-8 text-4xl font-bold">Home Page</h1>
        <Web3Address />
      </main>

      <footer className="justify-end p-4">
        <p className="text-lg font-light">Footer</p>
      </footer>
    </div>
  )
}

export default Application