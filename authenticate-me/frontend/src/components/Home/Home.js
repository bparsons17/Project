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
    

    return (
      <div className="home">
        <div className="bets">
          {" "}
          Check out todays games!
          {bets.map((bet) => (
            <div>
              <NavLink key={bet.id} to={`/bets/${bet.id}`}>
                <li key={bet.id}>{bet.teams}</li>
              </NavLink>
              
              <button>{bet.homeTeamMoneyLine}</button>
              <button>{bet.awayTeamMoneyLine}</button>
              <button>{bet.homeTeamSpread}</button>
              <button>{bet.awayTeamSpread}</button>
              <button>{bet.overTotal}</button>
              <button>{bet.underTotal}</button>
            </div>
          ))}
        </div>

        <Route path="/bets/:betId"></Route>
      </div>
    );
}


export default Home;