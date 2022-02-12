import { FC, MutableRefObject, useEffect } from 'react'

import useOnScreen from '../hooks/useOnScreen'
import ArrowDown from '../components/icons/ArrowDown'

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
    <div ref={viewRef} className="view-container">
      <main className="main-container">{children}</main>
      <div className="flex-shrink-0 flex flex-col items-center pb-4">
        {customFooter ?? (
          <>
            <p className="text-label font-medium pb-2">SCROLL DOWN</p>
            <ArrowDown className="w-6 h-6 stroke-label" />
          </>
        )}
      </div>
    </div>
  )
}

export default ViewLayout
