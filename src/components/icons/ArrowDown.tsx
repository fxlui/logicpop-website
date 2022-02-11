// icons are tailwind-compatible: https://heroicons.com/ https://tailwindcss.com/docs/fill
// converted to tsx using https://react-svgr.com/playground/?typescript=true

import { SVGProps } from 'react'

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 fill-blue-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 14-7 7m0 0-7-7m7 7V3"
    />
  </svg>
)

export default ArrowDown
