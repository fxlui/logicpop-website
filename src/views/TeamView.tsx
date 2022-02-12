import TeamCard from '../components/TeamCard'

function TeamView() {
  return (
    <div className="flex content-center space-x-6">
      <TeamCard name="James Wong" photo="a" description="gamer" />
      <TeamCard name="Eric Liu" photo="a" description="gamer" />
      <TeamCard name="Richard Zhu" photo="a" description="gamer" />
    </div>
  )
}

export default TeamView
