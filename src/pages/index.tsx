import type { NextPage } from 'next'
import HomeView from '../views/HomeView'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>logicpop</title>
        <meta name="description" content="Logicpop website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeView />

      <footer></footer>
    </div>
  )
}

export default Home
