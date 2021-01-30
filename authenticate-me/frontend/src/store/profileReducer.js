import { fetch } from "./csrf.js";
const SET_PROFILE = 'profile/SET_PROFILE'
const fetchProfile = (payload) => ({
    type:SET_PROFILE,
    payload,
})

export const getProfile = () => async (dispatch) => {
    const res = await fetch('api/profile')
    console.log(res)

        dispatch(fetchProfile(res.data))
    
}
const initState = {}
    
function profileReducer(state = initState, action) {
    let newState;
    switch(action.type) {
        case SET_PROFILE: 
            newState = [action.payload]
            return newState
        
            default:
        return state
    }
} 

export default profileReducer;
