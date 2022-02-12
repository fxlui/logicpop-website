import { useState, useEffect, MutableRefObject } from 'react'

export default function useOnScreen(
  ref: MutableRefObject<HTMLDivElement | null>
) {
  const [isIntersecting, setIntersecting] = useState(false)
  const [observer, setObserver] = useState<IntersectionObserver | null>(null)

  useEffect(() => {
    setObserver(
      new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        { threshold: 0.6 }
      )
    )
  }, [])

  useEffect(() => {
    if (ref.current && observer) {
      observer.observe(ref.current)
    }
    return () => {
      observer?.disconnect()
    }
  }, [observer, ref])

  return isIntersecting
}
