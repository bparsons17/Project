import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBetFromProfile, getProfile } from '../../store/profileReducer'
import {  getProfileBets } from '../../store/betReducer'
import './profile.css'
import { useHistory } from 'react-router-dom'
import Tracker from "../Tracker/Tracker";


const Profile = () => {
   const dispatch = useDispatch()
   const history = useHistory()
   const profiles = useSelector((state)=> Object.values(state.profile))
   const user = useSelector((state) => state.session.user);

   const bets = useSelector((state) => Object.values(state.bets));
   
  
   const deleteBet = (e) => {
     e.preventDefault()
     dispatch(deleteBetFromProfile())
     history.push('/')
   }
   
  
   useEffect(()=> {
     dispatch(getProfile(user.id));
     dispatch(getProfileBets(user.id));
   }, [dispatch, user.id])
  
  
    
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
            <div className='wrap'>
              <div className="container2">

            </div>
              {bets.map((bet) => (
                <div className="card3">
                  <div className="card-body3">
                    <h5 className="card-title">{`${bet.player}: ${bet.bet}`}</h5>

                    <p className="card-text">Odds: {bet.odds}</p>
                    <p className="card-text">Opponent: {bet.opponent}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={deleteBet}
                    >
                      Delete Bet
                    </button>
                  </div>
                </div>
              ))}
              <h2>Results Summary</h2>
              <div className='track-wrap'> 
                
                <Tracker />
              </div>
              
            </div>
          </div>
        </div>
      
      </>
    );

}

//            div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{bet.player}</h5>
//                 <h6 className="card-subtitle mb-2 ">{bet.bet}</h6>
//                 <p className="card-text">{bet.details}</p>
//                 <button type="button" className="btn btn-primary" onClick={deleteBet}>
//                   Add to Profile
//                 </button>
//                 <NavLink
//                   to={`/bets/${bet.id}`}
//                   type="button"
//                   className="btn btn-primary"
//                 >
//                   See More
//                 </NavLink>
//               </div>
//             </div>
//            

export default Profile