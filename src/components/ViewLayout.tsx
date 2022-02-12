import { FC, MutableRefObject } from 'react'

import ArrowDown from '../components/icons/ArrowDown'

const ViewLayout: FC<{
  customFooter?: JSX.Element
  viewRef: MutableRefObject<HTMLDivElement | null>
}> = ({ viewRef, customFooter, children }) => {
  return (
    <div ref={viewRef} className="view-container">
      <main className="main-container">{children}</main>
      <div className="flex-shrink-0 flex flex-col items-center pb-2">
        {customFooter ?? (
          <>
            <p className="text-label font-medium">SCROLL DOWN</p>
            <ArrowDown className="w-6 h-6 stroke-label" />
          </>
        )}
      </div>
    </div>
  )
}

export default ViewLayout
