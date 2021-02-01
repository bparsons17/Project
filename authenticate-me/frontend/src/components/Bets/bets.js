import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFromBetsPage, getBets } from "../../store/betReducer";
import './bet.css'



const Bet = () => {
    const dispatch = useDispatch();
    const bets = useSelector((state) => Object.values(state.bets));

    const user = useSelector((state) => state.session.user);
  

    

     const addToProfile = (event) => {
       event.preventDefault();
       dispatch(addFromBetsPage());
     };


    useEffect(() => {
      dispatch(getBets());
    }, [dispatch]);
    return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Wager Id</th>
            <th>Player</th>
            <th>Bet</th>
            <th>Odds</th>
            <th>Opponent</th>
            <th>Add to betslip</th>
          </tr>
        </thead>
        {bets.map((bet) => (
          <tbody>
            <tr className="table-active">
              <th>{bet.id}</th>
              <td>{bet.player}</td>
              <td>{bet.bet}</td>
              <td>{bet.odds}</td>
              <td>{bet.opponent}</td>
              <td>
                <button type="button" class="btn btn-primary"onClick={addToProfile}>
                  Add Bet
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    );
}

export default Bet;