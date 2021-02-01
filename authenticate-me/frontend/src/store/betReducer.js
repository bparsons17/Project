import {fetch } from './csrf.js'
const initialState = {
//   1: {
//     player: "Lebron James",
//     details: "point total",
//     over: "17.5",
//     under: "17.5",
//     createdAt: new Date("2021-01-05"),
//     updatedAt: new Date("2021-01-05"),
//   },
//   2: {
//     player: "Lebron James",
//     details: "point total",
//     over: "17.5",
//     under: "17.5",
//     createdAt: new Date("2021-01-05"),
//     updatedAt: new Date("2021-01-05"),
//   },
};


//  
const ADD_BETS = 'bets/ADD_BETS'
const SET_BETS = 'bets/SET_BETS'
const SET_ONE_BET = 'bets/SET_ONE_BET'

const addBets = (payload) => ({
    type:ADD_BETS,
    payload,
})
const setBets = (payload) => ({
  type: SET_BETS,
  payload,
});
const setOneBet = (payload) => ({
    type:SET_ONE_BET,
    payload,
})
export const addBetToProfile = (userId, betId) => async (dispatch) => {
    
    const res = await fetch(`/api/profile/${betId}`, {
        method:'POST',
        body: JSON.stringify({ userId, betId })
    })
        dispatch(addBets(betId, userId))
    
}
export const addFromBetsPage = () => async (dispatch) => {
    const res = await fetch('api/bets/create',{
        method: "Post",
        body: JSON.stringify()
    })
    dispatch(addBets(res.data))
}
export const getProfileBets = () => async (dispatch) => {
  const res = await fetch("/api/bets/profile");
  let newBets = {};
  for (let profileBet of res.data) {
    const bet = profileBet["Bet"];
    newBets[bet.id] = bet;
  }
  dispatch(setBets(newBets));
};
export const getBets = () => {
    return async (dispatch) => {
  const res = await fetch("/api/bets");
  
  dispatch(setBets(res.data));
}

    // // const bets = await res.json();
    // let newBets = {}
    // for(let bet of res.data) {
    //     newBets[bet.id] = bet
    // }
    
  
};
 export const getOneBet = (id) => {
     return async (dispatch) => {
    const res = await fetch(`/api/bet/${id}`)
  
    dispatch(setOneBet(res.data))
 }
}

const betReducer = (state= initialState, action) => {
    // let newState = Object.assign({}, state);
    let newState;
    switch (action.type) {
        case SET_BETS:
            
            newState = action.payload
            return newState;
        case SET_ONE_BET:
            newState = [action.payload]
           
            return newState;
        case ADD_BETS:
            newState = [...state, action.payload]
            
            return newState;
        default:
            return state
    }
}


export default betReducer;