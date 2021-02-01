import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'
import { getBets } from '../../store/betReducer'
import ImageCard from '../ImageCards/ImageCard';
import ImageCard2 from "../ImageCards/ImageCard2";
import './Home.css'


const Home = () => {
 
    const dispatch = useDispatch()
    const bets = useSelector((state)=>Object.values(state.bets))
    
    useEffect(()=> {
        dispatch(getBets())
        
    },[dispatch])
    
   
   

   
  //  const game1 = bets[0]
  //  const game2 = bets[1]
  //  const {team, moneyline, spread, over, under} = game1;
 
  

    return (
      <div className="container">
        <div className="bets">
          <div>
          {} <h2>Check Out Todays Player Props</h2>
          </div>
          {bets.map((bet) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{bet.player}</h5>
                <h6 className="card-subtitle mb-2 ">{bet.bet}</h6>
                <p className="card-text">{bet.details}</p>
                <button type="button" className="btn btn-primary">
                  Add to Profile
                </button>
                <NavLink
                  to={`/bets/${bet.id}`}
                  type="button"
                  className="btn btn-primary"
                >
                  See More
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <Route path="/bets/:betId"></Route>
        <div className="imageCard-container">
          <ImageCard />
          <ImageCard2 />
        </div>
        
      </div>
    );
}


export default Home;