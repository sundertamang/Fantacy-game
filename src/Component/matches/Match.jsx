import TeamCard from '../card/TeamCard'
import './match.css'
import { Data } from '../../DB'

function Match() {

  return (
    <div>
        <div className="matches">
            <h2 className='heading'>Upcoming matches</h2>
            
            <div>
                {
                    Data.map((p)=>{
                        return(
                            <TeamCard key={p.id} post={p}/>
                        )
                        
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Match