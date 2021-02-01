import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { deleteBetFromProfile, getProfile } from '../../store/profileReducer'
import { getBets, getProfileBets } from '../../store/betReducer'
import './profile.css'
import { useHistory } from 'react-router-dom'


const Profile = () => {
   const dispatch = useDispatch()
   const history = useHistory()
   const profiles = useSelector((state)=> Object.values(state.profile))
   const user = useSelector((state) => state.session.user);
   console.log(user,'kdkdkd')
   const bets = useSelector((state) => Object.values(state.bets));
   console.log(bets)
  
   const deleteBet = (e) => {
     e.preventDefault()
     dispatch(deleteBetFromProfile())
     history.push('/bets')
   }
   
  
   useEffect(()=> {
     console.log('test')
       dispatch(getProfile(user.id))
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
            <h2>My Bets</h2>
            {bets.map((bet) => (
              <div>
                <div>{`${bet.player}: ${bet.bet} ${bet.odds}`}</div>
                <button onClick={deleteBet}>delete</button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
export default Profile