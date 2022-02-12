import Head from 'next/head'
import type { NextPage } from 'next'
import { useState, useRef } from 'react'

import type { View } from '../types'
import HomeView from '../views/HomeView'
import WorkView from '../views/WorkView'
import TeamView from '../views/TeamView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import ViewLayout from '../components/ViewLayout'
import DesktopMenu from '../components/DesktopMenu'

const Home: NextPage = () => {
  // right now this state will trigger rerender frequently since it's in the root
  // TODO: use somthing like zustand instead
  const [currentView, setCurrentView] = useState<View>('HOME')

  const homeRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)
  const workRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  function scrollToView(view: View) {
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
        contactRef.current?.scrollIntoView(option)
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

      <ViewLayout
        viewRef={homeRef}
        setCurrentView={() => setCurrentView('HOME')}
      >
        <HomeView />
      </ViewLayout>

      <ViewLayout
        viewRef={aboutRef}
        setCurrentView={() => setCurrentView('ABOUT_US')}
      >
        <AboutView />
      </ViewLayout>

      <ViewLayout
        viewRef={teamRef}
        setCurrentView={() => setCurrentView('OUR_TEAM')}
      >
        <TeamView />
      </ViewLayout>

      <ViewLayout
        viewRef={workRef}
        setCurrentView={() => setCurrentView('OUR_WORK')}
      >
        <WorkView />
      </ViewLayout>

      <ViewLayout
        viewRef={contactRef}
        customFooter={<p>© 2021 logicpop. ABN 51 329 039 302</p>}
        setCurrentView={() => setCurrentView('CONTACT_US')}
      >
        <ContactView />
      </ViewLayout>
    </div>
  )
}

export default Home
