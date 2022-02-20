import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ProjectCard, Project } from '../components/ProjectCard'
import Close from '../components/icons/Close'
import medician from '../../public/images/projects/medician.png'

const projects: Project[] = [
  {
    name: 'Medician',
    date: 'Oct 2021',
    recognition: 'UNSW CSESoc Projects Competition 3rd Prize',
    platform: 'Mobile (iOS/Android)',
    technology: 'React Native,\nTypeScript',
    status: 'Deployed on\nApp Store',
    image: medician
  }
]

function WorkView() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project>(projects[0])

  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setModalOpen(false)}
        >
          <div className="min-h-screen px-4 text-center backdrop-blur-sm">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-scree align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-md p-3 my-8 overflow-visible text-left align-middle transition-all transform bg-bg-card rounded-card">
                <div className="py-6 px-6 w-72 md:w-64 flex flex-col justify-center">
                  <div className="block space-y-4">
                    <div>
                      <p className="font-medium text-md text-secondary">
                        Project
                      </p>
                      <p className="font-medium text-xl">
                        {activeProject.name}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-md text-secondary">Date</p>
                      <p className="font-medium text-xl">
                        {activeProject.date}
                      </p>
                    </div>
                    {activeProject.recognition ? (
                      <div>
                        <p className="font-medium text-md text-secondary">
                          Recognition
                        </p>
                        <p className="font-medium text-xl">
                          {activeProject.recognition}
                        </p>
                      </div>
                    ) : null}
                    {activeProject.platform ? (
                      <div>
                        <p className="font-medium text-md text-secondary">
                          Platform
                        </p>
                        <p className="font-medium text-xl">
                          {activeProject.platform}
                        </p>
                      </div>
                    ) : null}
                    {activeProject.technology ? (
                      <div>
                        <p className="font-medium text-md text-secondary">
                          Technology
                        </p>
                        <p className="font-medium text-xl">
                          {activeProject.technology}
                        </p>
                      </div>
                    ) : null}
                    <div>
                      <p className="font-medium text-md text-secondary">
                        Status
                      </p>
                      <p className="font-medium text-xl">
                        {activeProject.status}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
                  <button
                    type="button"
                    className="inline-flex justify-center p-3 text-white hover:text-black transition-colors bg-primary rounded-full hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setModalOpen(false)}
                  >
                    <Close className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="h-8 md:hidden" />
      {projects.map((project: Project) => (
        <ProjectCard
          key={project.name}
          {...project}
          setProject={() => setActiveProject(project)}
          openModal={() => setModalOpen(true)}
        />
      ))}
    </>
  )
}

export default WorkView
