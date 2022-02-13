import TeamCard from '../components/TeamCard'

import eric from '../../public/images/eric.png'
import james from '../../public/images/james.png'
import richard from '../../public/images/richard.png'

function TeamView() {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-8 md:mt-0">
      <TeamCard name="James Wong" photo={james} description="business" />
      <TeamCard name="Eric Liu" photo={eric} description="design" />
      <TeamCard name="Richard Zhu" photo={richard} description="technical" />
    </div>
  )
}

export default TeamView
