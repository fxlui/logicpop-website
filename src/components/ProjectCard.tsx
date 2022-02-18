import { FC, useState } from 'react'
import { View } from '../types'
import clsx from 'clsx'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

export interface Project {
  name: string
  date: string
  recognition?: string
  platform?: string
  technology?: string
  status: string
  image: StaticImageData
}

interface PCProps extends Project {
  setProject: (project: Project) => void
  openModal: () => void
}

export const ProjectCard: FC<PCProps> = (project) => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center bg-bg-card rounded-card h-auto w-auto transition-transform ease-in-out duration-300 hover:scale-105 md:hover:scale-100 cursor-pointer md:pointer-events-none"
      onClick={() => {
        project.setProject(project)
        project.openModal()
      }}
    >
      <div className="py-6 md:py-8 px-6 w-72 md:w-64 flex flex-col justify-center ">
        <p className="md:hidden font-medium text-xl">{project.name}</p>
        <div className="hidden md:block md:space-y-4">
          <div>
            <p className="font-medium text-md text-text-secondary">Project</p>
            <p className="font-medium text-xl">{project.name}</p>
          </div>
          <div>
            <p className="font-medium text-md text-text-secondary">Date</p>
            <p className="font-medium text-xl">{project.date}</p>
          </div>
          {project.recognition ? (
            <div>
              <p className="font-medium text-md text-text-secondary">
                Recognition
              </p>
              <p className="font-medium text-xl">{project.recognition}</p>
            </div>
          ) : null}
          {project.platform ? (
            <div>
              <p className="font-medium text-md text-text-secondary">
                Platform
              </p>
              <p className="font-medium text-xl">{project.platform}</p>
            </div>
          ) : null}
          {project.technology ? (
            <div>
              <p className="font-medium text-md text-text-secondary">
                Technology
              </p>
              <p className="font-medium text-xl">{project.technology}</p>
            </div>
          ) : null}
          <div>
            <p className="font-medium text-md text-text-secondary">Status</p>
            <p className="font-medium text-xl">{project.status}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-96 md:h-full md:w-[48vw] lg:w-[40vw] xl:w-[50vw] relative">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="rounded-card rounded-b-none md:rounded-br-card md:rounded-l-none"
          priority
        />
      </div>
    </div>
  )
}

export default ProjectCard
