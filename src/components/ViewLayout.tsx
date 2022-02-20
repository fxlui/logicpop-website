import { FC, MutableRefObject, useEffect } from 'react'

import type { View } from '../types'
import useOnScreen from '../hooks/useOnScreen'
import ArrowDown from '../components/icons/ArrowDown'

const ViewLayout: FC<{
  scrollToNextView?: () => void
  setCurrentView: () => void
  customFooter?: JSX.Element
  viewRef: MutableRefObject<HTMLDivElement | null>
  tabIndex: number
}> = ({
  scrollToNextView = () => {},
  viewRef,
  customFooter,
  children,
  setCurrentView,
  tabIndex
}) => {
  const isViewOnScreen = useOnScreen(viewRef)

  useEffect(() => {
    if (isViewOnScreen) setCurrentView()
  }, [isViewOnScreen, setCurrentView])

  return (
    <section ref={viewRef} className="view-container snap-center">
      <div className="main-container">{children}</div>
      <div className="flex-shrink-0 flex flex-col items-center pb-4">
        {customFooter ?? (
          <a
            className="cursor-pointer"
            onClick={scrollToNextView}
            tabIndex={tabIndex}
          >
            <ArrowDown className="motion-safe:animate-bounce w-6 h-6 stroke-label link" />
          </a>
        )}
      </div>
    </section>
  )
}

export default ViewLayout
