const initialState = {
  1: {
    id: 1,
    teams: "KC Chiefs Vs TB Buccaneers",
    spread: "KC -3 TB +3",
    moneyline: "KC -166 Tb +146",
    total: "o56 u57",
    details:
      "Game will take place at Raymond James Stadium in Tampa Bay Florida",
    createdAt: new Date("2021-01-05"),
    updatedAt: new Date("2021-01-05"),
  },
};

const betReducer = (state= initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state
    }
}

export default betReducer;