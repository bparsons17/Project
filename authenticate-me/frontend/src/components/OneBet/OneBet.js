import React, { useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import {addBetToProfile, getOneBet} from '../../store/betReducer'
import * as sessionActions from '../../store/session'

import './OneBets.css'




const OneBet = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const oneBet = useSelector((state)=> (state.bets[0]))
   
    const user = useSelector((state) => state.session.user);
    const urlId = useParams()
    
    const betId = urlId.betId;
    

    const addToProfile = (event) => {
    event.preventDefault()
    dispatch(addBetToProfile(user.id, betId))
    history.push('/profile')
    }
    



    useEffect(() => {
      dispatch(getOneBet(betId));
      // dispatch(addBetToProfile(betId))
    },[betId, dispatch]);

    if(!oneBet) return null;

    return (
      <div className="container">
        <div className="card2">
          <div className="card-body">
            <h5 className="card-title">{oneBet.player}</h5>
            <h6 className="card-subtitle mb-2 ">{oneBet.bet}</h6>
            <p className="card-text">{oneBet.details}</p>
            <table className="table table-dark">
              <thead>
                <tr className="table-dark">
                  <th>Player</th>
                  <th>Bet</th>
                  <th>Odds</th>
                  <th>Opponent</th>
                  <th>Opponent Defensive Rating</th>
                  <th> Expert Pick</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-active">
                  <td className="table-active">{oneBet.player}</td>
                  <td className="table-active">{oneBet.bet}</td>
                  <td className="table-active">{oneBet.odds}</td>
                  <td className="table-active">{oneBet.opponent}</td>
                  <td className="table-active">26th</td>
                  <td className="table-active">Over</td>
                </tr>
              </tbody>
            </table>
            <NavLink
              to={"/profile"}
              className="btn btn-primary"
              type="button"
              onClick={addToProfile}
            >
              Add to Profile
            </NavLink>
          </div>
        </div>

      </div>
    );   
}
export default OneBet;