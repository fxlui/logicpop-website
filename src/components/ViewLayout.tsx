import { FC, MutableRefObject, useEffect } from 'react'

import useOnScreen from '../hooks/useOnScreen'
import ArrowDown from '../components/icons/ArrowDown'
import Image from 'next/image'
import logo from '../../public/logo.svg'

const ViewLayout: FC<{
  setCurrentView: () => void
  customFooter?: JSX.Element
  viewRef: MutableRefObject<HTMLDivElement | null>
}> = ({ viewRef, customFooter, children, setCurrentView }) => {
  const isViewOnScreen = useOnScreen(viewRef)

  useEffect(() => {
    if (isViewOnScreen) setCurrentView()
  }, [isViewOnScreen, setCurrentView])

  return (
    <div ref={viewRef} className="view-container snap-center">
      <main className="main-container">{children}</main>
      <div className="pointer-events-none fixed w-24 h-24 m-2 left-0 top-2">
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex-shrink-0 flex flex-col items-center pb-4">
        {customFooter ?? (
          <>
            <ArrowDown className="motion-safe:animate-bounce w-6 h-6 stroke-label" />
          </>
        )}
      </div>
    </div>
  )
}

export default ViewLayout
