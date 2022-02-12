import Head from 'next/head'
import { useState, useRef } from 'react'
import type { NextPage } from 'next'

import type { View } from '../types'
import DesktopMenu from '../components/DesktopMenu'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ViewLayout from '../components/ViewLayout'
import ContactView from '../views/ContactView'

const Home: NextPage = () => {
  const [currentView, setCurrentView] = useState<View>('HOME')

  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)
  const workRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  function scrollToView(view: View) {
    setCurrentView(view)
    const option: ScrollIntoViewOptions = { behavior: 'smooth' }
    switch (view) {
      case 'HOME':
        homeRef.current?.scrollIntoView(option)
        break
      case 'ABOUT_US':
        aboutRef.current?.scrollIntoView(option)
        break
      case 'OUR_TEAM':
        teamRef.current?.scrollIntoView(option)
        break
      case 'OUR_WORK':
        workRef.current?.scrollIntoView(option)
        break
      case 'CONTACT_US':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <div className="w-full">
      <Head>
        <title>logicpop</title>
        <meta name="description" content="Logicpop website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DesktopMenu {...{ currentView, scrollToView }} />

      <ViewLayout viewRef={homeRef}>
        <HomeView />
      </ViewLayout>

      <AboutView />

      <ContactView />
    </div>
  )
}

export default Home
