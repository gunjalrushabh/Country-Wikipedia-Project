import RawData from '../JsonData/CountryJson.json'
import { Link, useParams } from 'react-router-dom'
import '../allcss/details.css'

export default function Details() {
    const { name } = useParams();

    const country = RawData.find((records) => records.name === name);
    if (!country) {
        return (
            <div><h1>Country Not found</h1></div>
        )
    }
    /**
     *  //////////"name": "Afghanistan",
        "topLevelDomain": [
            ".af"
        ],
        "alpha2Code": "AF",
        "alpha3Code": "AFG",
        "callingCodes": [
            "93"
        ],
      ////////////  "capital": "Kabul",
        "altSpellings": [
            "AF",
            "Afġānistān"
        ],
       //// "region": "Asia",
      ////  "subregion": "Southern Asia",
      ////  "population": 27657145,
        "latlng": [
            33,
            65
        ],
        "demonym": "Afghan",
       ////// "area": 652230,
        "gini": 27.8,
      ///  "timezones": [
            "UTC+04:30"
        ],
      ////  "borders": [
            "IRN",
            "PAK",
            "TKM",
            "UZB",
            "TJK",
            "CHN"
        ],
       /// "nativeName": "افغانستان",
        "numericCode": "004",
        "currencies": [
            {
                "code": "AFN",
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        ],
        "languages": [
            {
                "iso639_1": "ps",
                "iso639_2": "pus",
                "name": "Pashto",
                "nativeName": "پښتو"
            },
            {
                "iso639_1": "uz",
                "iso639_2": "uzb",
                "name": "Uzbek",
                "nativeName": "Oʻzbek"
            },
            {
                "iso639_1": "tk",
                "iso639_2": "tuk",
                "name": "Turkmen",
                "nativeName": "Türkmen"
            }
        ],
        "translations": {
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "br": "Afeganistão",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان"
        },
        "flag": "https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/af.png",
        "regionalBlocs": [
            {
                "acronym": "SAARC",
                "name": "South Asian Association for Regional Cooperation",
                "otherAcronyms": [],
                "otherNames": []
            }
        ],
        "cioc": "AFG",
        "id": 0
    }
     */

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 offset-md-2 shadow py-3'>
                    <div className='md-3'>

                        {/*  */}

                        <div className='darkray' >
                            <img src={country.flag} alt="..." />

                            <h5>Country Name : {country.name}</h5>
                            <h6>Capital : {country.capital}</h6>
                            {/* <p className="card-text">{country.borders.map((data)=>{
                                        return(
                                        <div>
                                            <h2>{data}</h2>
                                        </div>)
                                    })}</p> */}

                            <div className="d-flex flex-column ">
                                <div className="p-2">Country SubRegion: {country.subregion}</div>
                                <div className="p-2">Country Population: {country.population}</div>
                                <div className="p-2">Area: {country.area}</div>
                                <div className="p-2">Country NativeName: {country.nativeName}</div>
                                <div className="p-2">Time Zone: {country.timezones}</div>
                                <div className="p-2">Cioc: {country.cioc}</div>
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle btn-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country Borders
                                    </a>

                                    <ul className="dropdown-menu">
                                        {country.borders && country.borders.map((nestdata) => {

                                            return (
                                                <li><a className="dropdown-item">{nestdata}</a></li>
                                            )
                                        })}

                                    </ul>
                                </div>
                                

                            </div>


                        </div>
                        <Link className='btn btn-outline-success mt-2' to={'/'}>Back to Home Page</Link>
                        {/*  */}

                    </div>

                </div>
            </div>
        </div>
    )
}
