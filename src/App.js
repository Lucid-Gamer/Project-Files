import './App.css';
import {Route, Routes} from 'react-router-dom'
import Packages from './components/Packages';
import HeaderComponent from './components/HeaderComponent';
import CustomerRegistration from './components/CustomerRegistration';
import HelperRegistration from './components/HelperRegistration';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/' element={<Packages/>}/>
          <Route exact path='/custreg' element={<CustomerRegistration/>}/>
          <Route exact path='/helpreg' element={<HelperRegistration/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
