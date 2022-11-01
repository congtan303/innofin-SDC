import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import ReactSwipeButton from "react-swipe-button";
import SwipeBtn from './swipe';
import Slash from './components/Slash/Slash';
import Login from './components/Login/Login';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import ChangePassword from './components/SuccessRecoverPassword/ChangePassword';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SuccessPassword from './components/Union/SuccessPassword/SuccessPassword';
import Account from './components/Account/Account';
import Setting from './components/Setting/Setting';
import InformationUser from './components/InformationUser/InformationUser';
import Helps from './components/Helps/Helps';
import Recharge from './components/Recharge/Recharge';
import RechargeConfirm from './components/RechargeConfirm/RechargeConfirm';
import History from './components/History/History';
import HistoryRecharge from './components/HistoryRecharge/HistoryRecharge';
import HomePage from './components/HomePage/HomePage';
import Detail1 from './components/Detail1/Detail1';
import Detail2 from './components/Detail2/Detail2';
import ListMoney1 from './components/ListMoney1/ListMoney1';
import ListMoneyComplete from './components/ListMoneyComplete/ListMoneyComplete';
import CashComplete from './components/CashComplete/CashComplete';
import Verification from './components/Verification/Verification';
import SwipeableButton from './components/SwipeButton/SwipeButton';

function App() {
  const success = () => {
    console.log("weell");
  };
  return (

    <div className="App">



      <Routes>
        <Route path='/' element={<Slash />}>

        </Route>
        <Route path='/login' element={<Login />} >
        </Route>
        <Route path='/account-user' element={<Account />}>

        </Route>
        <Route path='/setting' element={<Setting />}>

        </Route>
        <Route path='/information-user' element={<InformationUser />}>

        </Route>
        <Route path='/helps' element={<Helps />}>
        </Route>
        <Route path='/recharge-money' element={<Recharge />}>
        </Route>
        <Route path='/recharge-confirm' element={<RechargeConfirm />}>

        </Route>
        <Route path='/history' element={<History />}>

        </Route>


        <Route path='/history-recharge' element={<HistoryRecharge />}>

        </Route>

        <Route path='/home-page' element={<HomePage />}>

        </Route>

        <Route path='/change-password' element={<ForgotPassword />}></Route>
        <Route path='/success-password' element={<SuccessPassword />}> </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>


      {/* 
      <ChangePassword />
      
       */}






      {/* <Detail1 /> */}
      {/* <Detail2 /> */}

      {/* <ListMoneyComplete /> */}
      {/* <CashComplete /> */}

      {/* <Verification /> */}

      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ width: "500px" }}>
        <ReactSwipeButton
          text="SWIPE TO UNLOCK"
          color="#f00"
          onSuccess={success}
        />
      </div> */}
    </div>


  );
}

export default App;
