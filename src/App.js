import './App.css';
import {Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import CustomerRegistration from './components/CustomerRegistration';
import HelperRegistration from './components/HelperRegistration';
import About from './components/About';
import CustomerLoginForm from './components/CustomerLoginForm';
import HelperLoginForm from './components/HelperLoginForm';
import HomePage from './components/HomePage';
import ListCustomers from './components/ListCustomers';
import ListHelpers from './components/ListHelpers';
import EditCustomer from './components/EditCustomer';
import TempCustReg from './components/TempCustReg';
import EditHelper from './components/EditHelper';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className='container-fluid'>
        <Routes>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/custreg' element={<TempCustReg/>}/>
          <Route exact path='/helpreg' element={<HelperRegistration/>}/>
          <Route exact path='/custlogin' element={<CustomerLoginForm/>}/>
          <Route exact path='/helplogin' element={<HelperLoginForm/>}/>
          <Route exact path='/custlist' element={<ListCustomers/>}/>
          <Route exact path='/helplist' element={<ListHelpers/>}/>
          <Route path='/edit-customer/:id' element={<EditCustomer/>}/>
          <Route path='/edit-helper/:id' element={<EditHelper/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
