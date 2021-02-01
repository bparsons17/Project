import { fetch } from "./csrf.js";
const SET_PROFILE = 'profile/SET_PROFILE'
const DELETE_BET = 'profile/DELETE_BET'
const ADD_BET = 'profile/ADD_BET'
const fetchProfile = (payload) => ({
    type:SET_PROFILE,
    payload,
})
const deleteBet = (payload) => ({
    type:DELETE_BET,
    payload
})
const addBet = (payload) => ({
    type: ADD_BET,
    payload
})

export const deleteBetFromProfile = (bet) => async(dispatch) => {
    const res = await fetch('api/profile/delete', {
        method: 'DELETE',
        body: JSON.stringify(bet)
    })
    if(res.ok) {
        const deleted = await res.json()
        dispatch(deleteBet(bet))
    }
}
export const addFromBetsPage = () => async (dispatch) => {
  const res = await fetch("api/profile/create", {
    method: "Post",
    body: JSON.stringify(),
  });
  dispatch(addBet(res.data));
};

export const getProfile = () => async (dispatch) => {
    const res = await fetch('api/profile')
    

        dispatch(fetchProfile(res.data))
    
}
const initState = {}
    
function profileReducer(state = initState, action) {
    let newState;
    switch (action.type) {
      case DELETE_BET: {
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      }
      case SET_PROFILE:
        newState = [action.payload];
        return newState;
      case ADD_BET:
          newState = [action.payload]
          return newState

      default:
        return state;
    }
} 

export default profileReducer;
