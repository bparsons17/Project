import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getProfile } from '../../store/profileReducer'
import { getBets, getProfileBets } from '../../store/betReducer'
import './profile.css'


const Profile = () => {
   const dispatch = useDispatch()
   const profiles = useSelector((state)=> Object.values(state.profile))
   const bets = useSelector((state) => Object.values(state.bets));
  console.log(bets,'')
  
   useEffect(()=> {
     console.log('test')
       dispatch(getProfile())
       dispatch(getProfileBets())
   }, [dispatch])
  
    
    return (
      <>
        <div className="image-container">
          {" "}
          {/* <img
            className="pat-image"
            src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/chiefs/indf93tk5fvcty97rghw"
          ></img> */}
          <div>
            {bets.map((bet) => (
              <div>
                <h2>My Bets</h2>
                <div>{`${bet.player}: Over ${bet.over}`}</div>
                <div>{`${bet.player}: Under ${bet.under}`}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
export default Profile