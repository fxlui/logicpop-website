import { FC, Fragment } from 'react'
import { View } from '../types'
import { Menu, Transition } from '@headlessui/react'

import Hamburger from './icons/Hamburger'
import MenuLink from './MenuLink'

function mobileMenuText(view: View) {
  switch (view) {
    case 'HOME':
      return 'Home'
    case 'ABOUT_US':
      return 'About Us'
    case 'OUR_TEAM':
      return 'Our Team'
    case 'OUR_WORK':
      return 'Our Work'
    case 'CONTACT_US':
      return 'Contact Us'
    default:
      return 'Home'
  }
}

const MobileMenu: FC<{
  currentView: View
  scrollToView: (view: View) => void
}> = ({ currentView, scrollToView }) => {
  return (
    <div
      className="block lg:hidden fixed top-10 right-10 z-10 border-0"
      aria-haspopup="true"
      tabIndex={0}
    >
      <Menu as="div" className="relative inline-block">
        <Menu.Button className="p-2 inline-flex font-medium text-lg flex-row items-center focus:outline-none border-0">
          {mobileMenuText(currentView)}
          <Hamburger className="stroke-primary w-6 h-6 ml-2" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            as="nav"
            className="absolute w-48 -top-5 right-0 flex flex-col rounded-2xl bg-bg-card items-end py-2 pl-6 pr-2 focus:outline-none border-0"
          >
            <Menu.Item>
              <MenuLink
                href="#home"
                selected={currentView === 'HOME'}
                onClick={() => scrollToView('HOME')}
                tabIndex={0}
              >
                Home
              </MenuLink>
            </Menu.Item>

            <Menu.Item>
              <MenuLink
                href="#about-us"
                selected={currentView === 'ABOUT_US'}
                onClick={() => scrollToView('ABOUT_US')}
                tabIndex={0}
              >
                About Us
              </MenuLink>
            </Menu.Item>

            <Menu.Item>
              <MenuLink
                href="#our-team"
                selected={currentView === 'OUR_TEAM'}
                onClick={() => scrollToView('OUR_TEAM')}
                tabIndex={0}
              >
                Our Team
              </MenuLink>
            </Menu.Item>

            <Menu.Item>
              <MenuLink
                href="#our-work"
                selected={currentView === 'OUR_WORK'}
                onClick={() => scrollToView('OUR_WORK')}
                tabIndex={0}
              >
                Our Work
              </MenuLink>
            </Menu.Item>

            <Menu.Item>
              <MenuLink
                href="#contact-us"
                selected={currentView === 'CONTACT_US'}
                onClick={() => scrollToView('CONTACT_US')}
                tabIndex={0}
              >
                Contact Us
              </MenuLink>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MobileMenu
