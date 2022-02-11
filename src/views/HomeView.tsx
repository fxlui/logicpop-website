import ArrowDown from '../components/icons/ArrowDown'
import Image from 'next/image'

function HomeView() {
  return (
    <div className="view-container">
      <main className="main-container">
        <h1 className="text-3xl font-medium leading-loose">hello, we are</h1>
        <h1 className="text-6xl text-primary font-medium">logicpop</h1>
      </main>
      <div className="flex-shrink-0 flex flex-col items-center pb-2">
        <p className="text-label font-medium">SCROLL DOWN</p>
        <ArrowDown className="w-6 h-6 stroke-label" />
      </div>
    </div>
  )
}

export default HomeView
