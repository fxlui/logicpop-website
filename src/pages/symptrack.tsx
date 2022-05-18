import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Logo from '../../public/images/symptrack.svg'
import VectorGraphics from '../../public/images/symptrack-vector.svg'
import Lock from '../components/icons/Lock'
import Bars from '../components/icons/Bars'
import Users from '../components/icons/Users'
import Hospital from '../components/icons/Hospital'
import LifeRing from '../components/icons/LifeRing'
import Timer from '../components/icons/Timer'

const SympTrack: NextPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex">
      <Head>
        <title>SympTrack</title>
        <meta name="description" content="SympTrack by medi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-screen font-symptrack font-bold text-[#4B4B4B] max-w-full overflow-x-hidden">
        <div className="header px-8 pt-10 flex w-full justify-center">
          <div className="flex max-w-4xl flex-col md:flex-row space-y-8">
            <div className="left flex-1 flex flex-col justify-between space-y-8">
              <div className="w-36">
                <Image src={Logo} alt="SympTrack logo" priority={true} />
              </div>
              <div className="text-[1.4rem] max-w-[17em]">
                <h1>
                  Easy{' '}
                  <span className="st-gradient">
                    collection of patient symptoms
                  </span>{' '}
                  with translation into{' '}
                  <span className="st-gradient">meaningful insights</span> for
                  clinicians.
                </h1>
              </div>
              <div className="flex flex-wrap max-w-sm gap-2 pb-8">
                <div className="st-pill group">
                  <Lock className="st-pill-icon" />
                  <span className="transition-colors group-hover:text-white">
                    Secure
                  </span>
                </div>
                <div className="st-pill group">
                  <Bars className="st-pill-icon" />
                  <span className="transition-colors group-hover:text-white">
                    Efficient
                  </span>
                </div>
                <div className="st-pill group">
                  <Users className="st-pill-icon" />
                  <span className="transition-colors group-hover:text-white">
                    User-Friendly
                  </span>
                </div>
              </div>
            </div>
            <div className="right flex-1 flex justify-end items-end pointer-events-none">
              <div className="w-full">
                <Image
                  src={VectorGraphics}
                  alt="monitor with graphs and phone with text"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="benefits w-screen bg-st-secondary flex justify-center max-w-full">
          <div className="flex flex-col pt-10 text-st-text w-full max-w-4xl">
            <div className="mx-10 md:mx-0 flex flex-col justify-center items-center gap-4 text-lg md:flex-row">
              <div className="st-benefit">
                <Hospital className="fill-st-pink h-12 w-12" />
                <p className="text-center">20% less emergency room visits</p>
              </div>
              <div className="st-benefit">
                <LifeRing className="fill-st-pink h-14 w-14" />
                <p className="text-center text-xl">
                  Increased survival
                  <p className="mx-2 mt-2 text-sm text-center">
                    by up to 6 months in cancer patients
                  </p>
                </p>
              </div>
              <div className="st-benefit">
                <Timer className="fill-st-pink h-14 w-14" />
                <p className="text-center">Save up to 15% of clinic time</p>
              </div>
            </div>
            <div className="my-2 w-full flex justify-center">
              <a
                className="text-centerunderline opacity-50"
                target="_blank"
                rel="noreferrer"
                href="https://www.researchgate.net/publication/343793715_A_review_of_the_barriers_to_using_Patient-Reported_Outcomes_PROs_and_Patient-Reported_Outcome_Measures_PROMs_in_routine_cancer_care"
              >
                Source
              </a>
            </div>
          </div>
        </div>
        <div className="features w-full flex flex-col items-center max-w-full">
          <div className="st-feature max-w-4xl">
            <div>
              <video className="st-video" autoPlay loop muted playsInline>
                <source src="/videos/st-form.webm" type="video/webm" />
              </video>
            </div>
            <div className="st-feature-text">
              <h3 className="text-st-pink text-xl">
                Effortless Symptom Tracking
              </h3>
              <p>
                Using our customisable question bank, assign a specific set of
                symptoms for patients to track in just a few seconds.
              </p>
              <p>
                Let your patients to easily record their symptom details so that
                they don&apos;t leave out critical information or repeat
                themselves.
              </p>
            </div>
          </div>
          <div className="w-screen bg-st-secondary flex flex-col items-center">
            <div className="st-feature max-w-4xl pt-4 md:flex-row-reverse md:py-0">
              <div>
                <video className="st-video" autoPlay loop muted playsInline>
                  <source src="/videos/st-timeline.webm" type="video/webm" />
                </video>
              </div>
              <div className="st-feature-text">
                <h3 className="text-st-pink text-xl">Visual Timeline</h3>
                <p>
                  A simple, effective way to view a history of a patient&apos;s
                  records. Filter records by symptom, date or intensity.
                </p>
                <p>
                  Easily visualise evolution of different symptoms as they
                  progress, with treatment details available for a more
                  data-driven diagnosis.
                </p>
              </div>
            </div>
          </div>
          <div className="st-feature max-w-4xl pt-0 md:pt-5">
            <div className="md:mr-8">
              <video className="st-video" autoPlay loop muted playsInline>
                <source src="/videos/st-analytics.webm" type="video/webm" />
              </video>
            </div>
            <div className="st-feature-text">
              <h3 className="text-st-pink text-xl">Automated Data Analytics</h3>
              <p>
                Identify and understand symptom progressions with one glance,
                using our auto-generated graphs and analysis.
              </p>
              <p>
                Customise key factors to monitor in patients records for a more
                personalised and accurate analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-10 flex w-full justify-center bg-st-secondary max-w-full flex-col items-center">
          <h3 className="text-xl text-center flex justify-center items-center pb-8 flex-col md:flex-row">
            Help us build{' '}
            <div className="bg-gradient-to-r from-st-pink to-st-orange py-2 px-3 mx-2 my-1 md:my-0 text-white rounded-xl">
              a more digital healthcare
            </div>{' '}
            for Australia.
          </h3>
          <div className="bg-white p-6 rounded-xl w-full max-w-3xl flex justify-center items-center">
            {submitted ? (
              <div className="text-center">
                <h3 className="text-lg text-st-pink">Thank you!</h3>
                <p className="text-sm text-st-text">
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="w-full"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm">
                    Your name
                  </label>
                  <input type="text" id="name" className="form-box" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-box"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-box"
                    placeholder="Demo / Early Access / Feedback"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white transition-colors bg-st-pink hover:bg-neutral-600 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="px-8 py-4 flex w-full justify-center text-neutral-400 max-w-full">
          &copy; 2022 logicpop. ABN 51 329 039 302
        </div>
      </main>

      <footer className="hidden">&copy; 2022 SympTrack</footer>
    </div>
  )
}

export default SympTrack
