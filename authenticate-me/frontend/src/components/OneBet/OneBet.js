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
    

 const addToProfile = (event) => {
    event.preventDefault()
    dispatch(addBetToProfile(urlId.betId, user.id))
    
    }
    



    useEffect(() => {
      dispatch(getOneBet(urlId.betId));
    },[]);

    if(!oneBet) return null;

    return (
      <div>
        <div>{oneBet.details}</div>
        <div>
          {oneBet.bet}
            <button onClick={addToProfile}>Add to Profile</button>
          
        </div>
       
      </div>
    );
}   

export default OneBet;

