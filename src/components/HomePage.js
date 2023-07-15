import { useState } from "react";
import RawData from "../JsonData/CountryJson.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [searchCountry, setSearchCountry] = useState("");
  const handleSearch = (e) => {
    setSearchCountry(e.target.value);
  };
  const filterCountries = RawData.filter((country) => {
    if (searchCountry === "") {
      return country;
    } else if (
      country.name.toLowerCase().includes(searchCountry.toLowerCase())
    ) {
      return country;
    } else {
      return null;
    }
  });
  return (
    <div>
        <h2>Project Created by Rushabh Gunjal</h2>
      <h2>This is Country Wikipedia Web</h2>
      <em>Search Country Here ✌🏻 piece </em>
      <input
        type="text"
        placeholder="Enter Country Name"
        onChange={handleSearch}
        value={searchCountry}
      />
      <div style={{ padding: "10px" }}>
        {filterCountries &&
          filterCountries.map((records) => {
            return (
              <div
                className="parent"
                key={records.id}
                style={{ margin: "15px" }}
              >
                <div className="card py-3 shadow px-3 py-3 mt-2">
                  <Link to={`/country/${records.name}`}>
                    <img
                      src={records.flag}
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>

                  <div className="card-body">
                    <h3 className="card-text">{records.name}</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Population : </strong> {records.population}
                      </li>
                      <li className="list-group-item">
                        <strong>Region : </strong> {records.region}
                      </li>
                      <li className="list-group-item">
                        <strong>Capital : </strong> {records.capital}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
