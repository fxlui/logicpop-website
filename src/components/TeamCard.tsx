import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

const TeamCard: FC<{
  name: string
  photo: StaticImageData
  description: string
}> = ({ name, photo, description }) => {
  return (
    <div className="team-card">
      <div className="flex flex-1 justify-center items-center ml-3 lg:ml-0 lg:mt-8">
        <div className="rounded-full bg-primary h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 overflow-clip">
          <Image src={photo} alt={name} priority />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center mr-2 lg:mr-0">
        <p className="font-medium lg:mt-4 mb-1 lg:mb-2 text-xl md:text-2xl lg:text-3xl">
          {name}
        </p>
        <p className="font-medium text-lg md:text-xl lg:text-2xl text-secondary">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard
