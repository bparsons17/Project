import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {addBetToProfile, getOneBet} from '../../store/betReducer'
import * as sessionActions from '../../store/session'




const OneBet = () => {
    const dispatch = useDispatch()
    const oneBet = useSelector((state)=> (state.bets[0]))
    console.log(oneBet,'yuh')
    const user = useSelector((state) => state.session.user);
    const urlId = useParams()
    
    const betId = urlId.betId;
    

 const addToProfile = (event) => {
    event.preventDefault()
    dispatch(addBetToProfile(user.id, betId))
    
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
            <button type='button' onClick={addToProfile}>Add to Profile</button>
          
        </div>
       
      </div>
    );
}   

export default OneBet;

