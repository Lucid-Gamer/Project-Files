import './App.css';
import {Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import CustomerRegistration from './components/CustomerRegistration';
import HelperRegistration from './components/HelperRegistration';
import About from './components/About';
import CustomerLoginForm from './components/CustomerLoginForm';
import HelperLoginForm from './components/HelperLoginForm';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/custreg' element={<CustomerRegistration/>}/>
          <Route exact path='/helpreg' element={<HelperRegistration/>}/>
          <Route exact path='/custlogin' element={<CustomerLoginForm/>}/>
          <Route exact path='/helplogin' element={<HelperLoginForm/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
