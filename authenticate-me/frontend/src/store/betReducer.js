import {fetch } from './csrf.js'
const initialState = {
  1: {
    teams: "Kansas City Chiefs vs Tampa Bay Buccaneers",
    homeTeamMoneyLine: "KC -166",
    awayTeamMoneyLine: "TB +146",
    homeTeamSpread: "KC -3",
    awayTeamSpread: "TB +3",
    overTotal: "o57",
    underTotal: "u57",
    details:
      "Game will take place at Raymond James Stadium in Tampa Bay Florida",
    profileId: 1,
    createdAt: new Date("2021-01-05"),
    updatedAt: new Date("2021-01-05"),
  },
};
const ADD_BETS = 'bets/ADD_BETS'
const SET_BETS = 'bets/SET_BETS'
const SET_ONE_BET = 'bets/SET_ONE_BET'

const addBets = (betId) => ({
    type:ADD_BETS,
    betId,
})
const setBets = (payload) => ({
  type: SET_BETS,
  payload,
});
export const addBetToProfile = (betId) => async (dispatch) => {
    
    const res = await fetch(`/api/profile/${betId}`, {
        method:'POST',
        body: JSON.stringify({ betId })
    })
    console.log(res,'test')
    if(res.ok) {
        dispatch(addBets(betId))
    }
}
export const getProfileBets = () => async (dispatch) => {
    const res = await fetch('/api/bets/profile')
    console.log(res, 'dkkdkdk')
    let newBets = {}
    for(let profileBet of res.data) {
        const bet = profileBet['Bet']
        newBets[bet.id] = bet
    }
    dispatch(setBets(newBets));
}
export const getBets = () => async (dispatch) => {
  const res = await fetch("/api/bets");
  console.log(res)

  if (res.ok) {
    // const bets = await res.json();
    let newBets = {}
    for(let bet of res.data) {
        newBets[bet.id] = bet
    }
    dispatch(setBets(newBets));
  }
};


const betReducer = (state= initialState, action) => {
    // let newState = Object.assign({}, state);
    let newState;
    switch (action.type) {
        case SET_BETS:
            console.log(action.payload, 'test2')
            newState = Object.assign({}, state, action.payload)
            return newState;
        
        default:
            return state
    }
}


export default betReducer;