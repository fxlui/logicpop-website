import clsx from 'clsx'
import type { FC } from 'react'

const MenuLink: FC<{
  selected: boolean
  href: string
  onClick: () => void
  tabIndex: number
}> = ({ href, onClick, selected, tabIndex, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx('transition hover:text-primary text-xl font-medium p-2', {
        'text-label': !selected
      })}
      tabIndex={tabIndex}
    >
      {children}
      <span
        className={clsx('ease-in-out text-primary ml-2', {
          invisible: !selected
        })}
      >
        &#9679;
      </span>
    </a>
  )
}

export default MenuLink
