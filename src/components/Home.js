import React from 'react'
import Rawdata from '../JsonData/records.json'


export default function Home() {
    return (
        <div>
            <h1>This is home</h1>
            {
                Rawdata.map(records => {
                    return (
                        <div className='parent'>
                        <div className="card py-3">
                        <img src="https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/af.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-text">{records.title}</h3>
                            </div>
                    </div>
                    </div>
                  
                    )
                })
            }
        </div>
    )
}
