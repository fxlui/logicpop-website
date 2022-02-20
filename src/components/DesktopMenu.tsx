import type { FC } from 'react'
import { View } from '../types'
import MenuLink from './MenuLink'

const DesktopMenu: FC<{
  currentView: View
  scrollToView: (view: View) => void
}> = ({ currentView, scrollToView }) => {
  return (
    <nav
      tabIndex={1}
      className="hidden lg:flex flex-col items-end p-8 fixed top-0 right-0"
    >
      <MenuLink
        href="#home"
        selected={currentView === 'HOME'}
        onClick={() => scrollToView('HOME')}
        tabIndex={0}
      >
        Home
      </MenuLink>
      <MenuLink
        href="#about-us"
        selected={currentView === 'ABOUT_US'}
        onClick={() => scrollToView('ABOUT_US')}
        tabIndex={0}
      >
        About Us
      </MenuLink>
      <MenuLink
        href="#our-team"
        selected={currentView === 'OUR_TEAM'}
        onClick={() => scrollToView('OUR_TEAM')}
        tabIndex={0}
      >
        Our Team
      </MenuLink>
      <MenuLink
        href="#our-work"
        selected={currentView === 'OUR_WORK'}
        onClick={() => scrollToView('OUR_WORK')}
        tabIndex={0}
      >
        Our Work
      </MenuLink>
      <MenuLink
        href="#contact-us"
        selected={currentView === 'CONTACT_US'}
        onClick={() => scrollToView('CONTACT_US')}
        tabIndex={0}
      >
        Contact Us
      </MenuLink>
    </nav>
  )
}

export default DesktopMenu
