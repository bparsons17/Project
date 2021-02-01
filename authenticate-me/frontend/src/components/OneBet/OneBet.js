import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom'
import {addBetToProfile, getOneBet} from '../../store/betReducer'
import * as sessionActions from '../../store/session'




const OneBet = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const oneBet = useSelector((state)=> (state.bets[0]))
    console.log(oneBet,'yuh')
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
    },[]);

    if(!oneBet) return null;

    return (
      <div>
        <div>{oneBet.details}</div>
        <div>
          {oneBet.bet}

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
    );
}   

export default OneBet;

