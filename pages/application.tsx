import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NavbarApp } from '../components/navbar-app'
import styles from '../styles/Home.module.css'

const Application: NextPage = () => {
  return (
    <div>
      <NavbarApp />
      <div>
        Blya
      </div>
    </div>
  )
}

export default Application