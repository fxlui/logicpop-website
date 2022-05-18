import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1zM9 9h6V7a3 3 0 0 0-6 0z" />
    <rect height={13} rx={3} width={16} x={4} y={9} />
  </svg>
)

export default SvgComponent
