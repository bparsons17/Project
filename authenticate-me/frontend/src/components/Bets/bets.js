import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBets } from "../../store/betReducer";
import BetForm from "../BetForm/BetForm";
import { addBetToProfile } from '../../store/betReducer'
import './bet.css'


const Bet = () => {
    const betId = Number.parseInt(useParams().betId)
    const dispatch = useDispatch();
    const bets = useSelector(({ bets }) => Object.values(bets).filter(bet => bet.id === betId));

     const addToProfile = (e) => {
       e.preventDefault();
       dispatch(addBetToProfile(betId));
     };

    useEffect(() => {
      dispatch(getBets());
      dispatch(addBetToProfile())
    }, [dispatch]);
    return (
      <div key={betId}>
        {bets.map((bet) => (
          <div>
            <h2>{bet.player}</h2>
            <p>{bet.details}</p>
            <div className="button-container">
              <button  className="bet-buttons"onClick={addToProfile}> 
              {`Over ${bet.over}`}
              </button>
              <button className="bet-buttons" onClick={addToProfile}>
                {bet.under}
              </button>
              
            </div>
          </div>
        ))}
      </div>
    );
}

export default Bet;