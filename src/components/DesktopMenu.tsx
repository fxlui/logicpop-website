import type { FC } from 'react'
import { View } from '../types'
import MenuLink from './MenuLink'

const DesktopMenu: FC<{
  currentView: View
  scrollToView: (view: View) => void
}> = ({ currentView, scrollToView }) => {
  return (
    <nav className="hidden lg:flex flex-col items-end p-8 fixed top-0 right-0">
      <MenuLink
        href="#home"
        selected={currentView === 'HOME'}
        onClick={() => scrollToView('HOME')}
      >
        Home
      </MenuLink>
      <MenuLink
        href="#about-us"
        selected={currentView === 'ABOUT_US'}
        onClick={() => scrollToView('ABOUT_US')}
      >
        About Us
      </MenuLink>
      <MenuLink
        href="#our-team"
        selected={currentView === 'OUR_TEAM'}
        onClick={() => scrollToView('OUR_TEAM')}
      >
        Our Team
      </MenuLink>
      <MenuLink
        href="#our-work"
        selected={currentView === 'OUR_WORK'}
        onClick={() => scrollToView('OUR_WORK')}
      >
        Our Work
      </MenuLink>
      <MenuLink
        href="#contact-us"
        selected={currentView === 'CONTACT_US'}
        onClick={() => scrollToView('CONTACT_US')}
      >
        Contact Us
      </MenuLink>
    </nav>
  )
}

export default DesktopMenu
