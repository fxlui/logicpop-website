import { FC, useState } from 'react'
import { View } from '../types'
import clsx from 'clsx'

const TeamCard: FC<{
  name: string
  photo: string
  description: string
}> = ({ name, photo, description }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-card rounded-card h-80 w-48 xl:w-52 transition-transform ease-in-out duration-300 hover:scale-105">
      <div className="rounded-full bg-neutral-400 w-36 h-36" />
      <p className="font-medium mt-4 mb-2 text-2xl">{name}</p>
      <p className="font-medium text-xl text-secondary">{description}</p>
      <p className="font-medium text-xl text-secondary">{description}</p>
    </div>
  )
}

export default TeamCard
