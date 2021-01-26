import { useSelector } from 'react-redux'
import { NavLink, Route } from 'react-router-dom'

const Home = () => {
    const bets = useSelector((state)=>Object.values(state.bets))
    console.log(bets)

    return (
        <div className='home'>
            <div className='bets'>
                {bets.map(bet => (
                    <NavLink key={bet.id} to={`/bet/${bet.id}`}>{bet.teams}</NavLink>
                ))}
            </div>
            <Route path='/bet/:betId'>

            </Route>
        </div>
    )
}


export default Home;