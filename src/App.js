import './App.css';
import Details from './components/Details';

import HomePage from './components/HomePage';
// import Rawdata from './JsonData/records.json'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        {/* <Route exact path='/country:name' element={<Details/>} /> */}
        <Route exact path='/country/:name' element={<Details/>} />
        
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
