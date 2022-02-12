import { FC, useState } from 'react'
import { View } from '../types'
import clsx from 'clsx'

const MenuLink: FC<{
  selected: boolean
  href: string
  onClick: () => void
}> = ({ href, onClick, selected, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx('text-xl font-medium p-2', {
        'text-label': !selected
      })}
    >
      {children}
    </a>
  )
}

const DesktopMenu: FC<{
  currentView: View
  scrollToView: (view: View) => void
}> = ({ currentView, scrollToView }) => {
  return (
    <div className="flex flex-col items-end p-8 fixed top-0 right-0">
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
    </div>
  )
}

export default DesktopMenu
