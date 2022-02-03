import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>

<title>ninjas |  home</title>
    </Head>
    <div>
 
    <div >
      <h1 className={styles.title}>home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda numquam recusandae totam voluptatem 
        accusantium repellat, culpa vero aperiam explicabo sit.</p>
      <p  className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, laudantium.</p>
    </div>
    <Link href="/ninjas"><a className={styles.btn}>seee ninja listing</a></Link>
    </div>

    </>
  )
}
