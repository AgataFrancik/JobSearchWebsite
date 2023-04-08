import { Box } from '@mui/material';
import './App.css';
import NavBar from './components/navbar'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './homepage/homePage';
import { Login } from './login/Login';
import { Register } from './register/Register';
import { AccountSettings } from './accountSettings/AccountSettings';
import { JobOffers } from './jobOffers/JobOffers';
import { UserJobOffer } from './userJobOffer/UserJobOffer';
import { AddJobOffer } from './addJobOffer/AddJobOffer';
import { JobOfferDetails } from './jobOfferDetails/JobOfferDetails';
import { EditOffer } from './editOffer/EditOffer';


function App() {
  return (
    <> 
      <NavBar/>
      <Box>
       <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/settings' element={<AccountSettings/>} />
        <Route path='/allOffers' element={<JobOffers/>} />
        <Route path='/userOffers' element={<UserJobOffer/>} />
        <Route path='/addJobOffer' element={<AddJobOffer/>}/>
        <Route path='/offerDetails' element={<JobOfferDetails/>}/>
        <Route path='/addOffer' element={<AddJobOffer/>}/>
        <Route path='/editOffer' element={<EditOffer/>}/>
       </Routes> 
      </Box>
    </>
  );
}

export default App;
