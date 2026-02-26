
export default function Scores({Course_Name, results}) {
    return (
        <main className="scores-container">
        <div className="scores">
          <h1>{Course_Name}</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {results.map((element,index) => {
                     return (
                        <tr key={index}>
                            <td>{element.firstName}</td>
                            <td>{element.lastName}</td>
                            <td>{element.score}</td>
                        </tr>  
                     )
                })}
               
              
            </tbody>
          </table>
        </div>
      </main>

    )
}