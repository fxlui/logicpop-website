import Head from 'next/head'
import type { NextPage } from 'next'

import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>logicpop</title>
        <meta name="description" content="Logicpop website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView />
      <AboutView />
      <ContactView />
    </div>
  )
}

export default Home
