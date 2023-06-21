
import RawData from '../JsonData/CountryJson.json'
import { Link } from 'react-router-dom'
export default function HomePage() {
  

    return (
        <div>
            <h1>This is Country Wikipedia Web</h1>
          
            <div>
                {
                   RawData && RawData.map(records => {
                        return (
                            <div className='parent' key={records.id}>
                                <div className="card py-3 shadow px-3 py-3 mt-2">
                                    <Link to={`/country/${records.name}`}>
                                    <img src={records.flag} className="card-img-top" alt="..."  />
                                    </Link>
                                    
                                    <div className="card-body">
                                        <h3 className="card-text">{records.name}</h3>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><strong>Population : </strong> {records.population}</li>
                                            <li className="list-group-item"><strong>Region : </strong> {records.region}</li>
                                            <li className="list-group-item"><strong>Capital : </strong> {records.capital}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
