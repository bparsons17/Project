import { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { getBets } from '../../store/betReducer'
import { addBetToProfile } from "../../store/betReducer";


const Home = () => {
 
    const dispatch = useDispatch()
    const bets = useSelector((state)=>Object.values(state.bets))
    
    useEffect(()=> {
        dispatch(getBets())
        
    },[dispatch])
    
   
   

   
  //  const game1 = bets[0]
  //  const game2 = bets[1]
  //  const {team, moneyline, spread, over, under} = game1;
 
  

    return (
      <div className="home">
        <div className="bets">
          {} Check out todays player props!
          {bets.map((bet) => (
            <div>
              <NavLink key={bet.id} to={`/bets/${bet.id}`}>
                <li key={bet.id}>{bet.player}</li>
              </NavLink>
              <div>{bet.details}</div>
              <div>{bet.bet}</div>
              <div>{bet.odds}</div>
            </div>
          ))}
        </div>

        <Route path="/bets/:betId"></Route>
      </div>
    );
}


export default Home;