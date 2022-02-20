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
import MobileMenu from '../components/MobileMenu'
import DesktopMenu from '../components/DesktopMenu'

import Image from 'next/image'
import logo from '../../public/logo.svg'

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
    <div className="w-full snap-y snap-mandatory h-screen overflow-y-scroll">
      <Head>
        <title>logicpop</title>
        <meta
          name="description"
          content="logicpop builds innovative software solutions to real problems."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileMenu {...{ currentView, scrollToView }} />
      <DesktopMenu {...{ currentView, scrollToView }} />

      <a
        className="fixed w-24 h-24 m-2 left-0 top-2 hover:opacity-70 transition-opacity ease-in-out cursor-pointer"
        onClick={() => scrollToView('HOME')}
      >
        <Image src={logo} alt="logicpop logo" priority={true} />
      </a>

      <main className="h-screen">
        <ViewLayout
          viewRef={homeRef}
          scrollToNextView={() => scrollToView('ABOUT_US')}
          setCurrentView={() => setCurrentView('HOME')}
          tabIndex={0}
        >
          <HomeView />
        </ViewLayout>

        <ViewLayout
          viewRef={aboutRef}
          scrollToNextView={() => scrollToView('OUR_TEAM')}
          setCurrentView={() => setCurrentView('ABOUT_US')}
          tabIndex={0}
        >
          <AboutView />
        </ViewLayout>

        <ViewLayout
          viewRef={teamRef}
          scrollToNextView={() => scrollToView('OUR_WORK')}
          setCurrentView={() => setCurrentView('OUR_TEAM')}
          tabIndex={0}
        >
          <TeamView />
        </ViewLayout>

        <ViewLayout
          viewRef={workRef}
          scrollToNextView={() => scrollToView('CONTACT_US')}
          setCurrentView={() => setCurrentView('OUR_WORK')}
          tabIndex={0}
        >
          <WorkView />
        </ViewLayout>

        <ViewLayout
          viewRef={contactRef}
          customFooter={
            <footer>
              <p>© 2022 logicpop. ABN 51 329 039 302</p>
            </footer>
          }
          setCurrentView={() => setCurrentView('CONTACT_US')}
          tabIndex={0}
        >
          <ContactView />
        </ViewLayout>
      </main>
    </div>
  )
}

export default Home
