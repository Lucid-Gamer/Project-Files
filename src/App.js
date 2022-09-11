import './App.css';
import {Route, Routes} from 'react-router-dom'
import Packages from './components/About';
import HeaderComponent from './components/HeaderComponent';
import CustomerRegistration from './components/CustomerRegistration';
import HelperRegistration from './components/HelperRegistration';
import About from './components/About';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/custreg' element={<CustomerRegistration/>}/>
          <Route exact path='/helpreg' element={<HelperRegistration/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
