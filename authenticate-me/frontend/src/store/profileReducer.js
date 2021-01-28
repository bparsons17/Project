
const SET_PROFILE = 'profile/SET_PROFILE'
const fetchProfile = (payload) => ({
    type:SET_PROFILE,
    payload,
})

export const getProfile = () => async (dispatch) => {
    const res = await fetch('api/profile')
    console.log(res)
        
        if(res.ok) {
        const profile = await res.json()
        dispatch(fetchProfile(profile))
    }
}
const initState = {
    1:{
        id: 1,
    }
}
function profileReducer(state = initState, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case SET_PROFILE: 
            for(let profile of action.payload) {
                newState[profile.id] = profile;
            } 
            return newState
        
            default:
        return state
    }
} 

export default profileReducer;
