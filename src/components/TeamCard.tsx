import { FC, useState } from 'react'
import { View } from '../types'
import clsx from 'clsx'

const TeamCard: FC<{
  name: string
  photo: string
  description: string
}> = ({ name, photo, description }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-card rounded-card w-64 h-96">
      <div className="rounded-full bg-neutral-400 w-40 h-40" />
      <p className="font-medium mt-4 mb-2 text-3xl">{name}</p>
      <p className="font-medium text-2xl text-secondary">{description}</p>
      <p className="font-medium text-2xl text-secondary">{description}</p>
    </div>
  )
}

export default TeamCard
