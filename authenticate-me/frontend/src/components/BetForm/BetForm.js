
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from 'react-router-dom'
// import { addBetToProfile } from '../../store/betReducer'


//  const BetForm = ({Bets}) => {
//    const betId = Number.parseInt(useParams().betId);
//    const dispatch = useDispatch()
//    const [formInfo, setFormInfo] = useState({risk: '', toWin: ''})
//    const { risk, toWin } = formInfo;
//    const [errors, setErrors] = useState([])

//    const addToProfile = (e) => {
//      e.preventDefault()
//      dispatch(addBetToProfile(betId))
//    }
   
//    useEffect(()=> {
//     //    const errors = [];
//    },)


//    const onSubmit = (e) => {
//        e.preventDefault()
//         alert('Bet has been saved to your profile')

//         resetValues();
//      }

//      const resetValues = () => {
//          setFormInfo({risk : '', toWin: ''})
//      }
//     return (
//       <div>
//         <form onSubmit={onSubmit}>
//         <label>Risk</label>
//         <input value={risk} onChange={(e) => setFormInfo(e.target.value)}></input>
//         <label>To win</label>
//         <input value={toWin} onChange={(e) => setFormInfo(e.target.value)}></input>
//         <button type='submit' onSubmit={onSubmit} onClick={addToProfile}>Save Bet</button>
//         </form>
//       </div>
//     );
// }
// export default BetForm