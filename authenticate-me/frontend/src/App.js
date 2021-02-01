import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home/Home.js'
import BetForm from "./components/BetForm/BetForm";
import Profile from "./components/Profile/Profile";
import Bet from "./components/Bets/bets";
import OneBet from './components/OneBet/OneBet'
import ImageCard from "./components/ImageCards/ImageCard";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/bets/:betId">
            <OneBet />
          </Route>
          
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/bets'>
            <Bet />
          </Route>
          
    
        </Switch>
        
      )}
      
    </>
  );
}


export default App;
