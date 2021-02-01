import './tracker.css'
const Tracker = () => {
    return (
      <>
      <div className='wrapper'>
        <table className="table table-dark table-striped">
          <thead className='fuzz'>
            <tr className="table-dark">
              <th className="table-dark">Results</th>
              <th className="table-dark">Record</th>
              <th className="table-dark">Win Percentage</th>
              <th className="table-dark">Units won</th>
            </tr>
          </thead>
          <tbody className="table-dark table-striped">
            <tr className="table-dark">
              <th>Today</th>
              <td className="table-dark">0-0-0</td>
              <td className="table-dark">0%</td>
              <td className="table-dark">0u</td>
            </tr>
            <tr className="table-dark">
              <th>This Week</th>
              <td>8-9-1</td>
              <td>47.8%</td>
              <td>-1.7u</td>
            </tr>
            <tr className="table-dark">
              <th>This Month</th>
              <td className="table-dark">31-26-3</td>
              <td className="table-dark">51.6%</td>
              <td className="table-dark">+2.64u</td>
            </tr>
            <tr className="table-dark">
              <th>All Time</th>
              <td className="table-dark">151-135-13</td>
              <td className="table-dark">50.5%</td>
              <td className="table-dark">14.25u</td>
            </tr>
          </tbody>
        </table>
    </div>
      </>
    );
}
export default Tracker;