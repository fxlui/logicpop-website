import { FC } from 'react'

const TeamCard: FC<{
  name: string
  photo: string
  description: string
}> = ({ name, photo, description }) => {
  return (
    <div className="team-card">
      <div className="flex-1 flex justify-center items-center">
        <div className="rounded-full bg-neutral-400 w-16 h-16" />
      </div>
      <div className="flex-1 flex flex-col items-center pr-10 md:pr-0">
        <p className="font-medium mt-4 mb-2 text-xl lg:text-3xl">{name}</p>
        <p className="font-medium text-lg lg:text-2xl text-secondary">
          {description}
        </p>
        <p className="font-medium text-lg lg:text-2xl text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard
