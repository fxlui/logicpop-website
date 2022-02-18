import Image from 'next/image'
import photo from '../../public/images/james-enquiry.png'

function ContactView() {
  return (
    <>
      <div className="justify-center items-center text-center md:px-0 max-w-md md:max-w-xl text-lg md:text-xl lg:text-2xl font-medium">
        <div className="flex flex-1 justify-center items-center ml-3 lg:ml-0 lg:mt-8 mb-4">
          <div className="h-44 w-44 md:h-48 md:w-48 lg:h-56 lg:w-56">
            <Image src={photo} priority />
          </div>
        </div>
        <p>
          for enquiries, contact us at{' '}
          <a href="mailto:hi@logicpop.com.au">hi@logicpop.com.au</a>
        </p>
      </div>
    </>
  )
}

export default ContactView
