import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
// import ReactSwipeButton from "react-swipe-button";
// import SwipeBtn from './swipe';
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
import IdentificationCardChip from './components/IdentificationCardChip/IdentificationCardChip';
import FrontCamera from './components/FrontCamera/FrontCamera';
import FrontCamera2 from './components/FrontCamera2/FrontCamera2';
import BackSideCamera from './components/BackSideCamera/BackSideCamera';
import BackSideCamera2 from './components/BackSideCamera2/BackSideCamera2';
import FaceID from './components/FaceID/FaceID';
import IDCard from './components/IDCard/IDCard';
import ValidationResults from './components/ValidationResults/ValidationResults';
import ChangeAvatar from './components/ChangeAvatar/ChangeAvatar';
import FooterHistory from './components/FooterHistory/FooterHistory';
import FooterAccount from './components/FooterAccount/FooterAccount';
import FooterApp from './components/FooterApp/FooterApp';

import HeaderHistory from './components/HeaderHistory/HeaderHistory';
import HeaderHistoryRecharge from './components/HeaderHistoryRecharge/HeaderHistoryRecharge';
import HeaderApp from './components/HeaderApp/HeaderApp';
import Protected from './components/Protected';
import ImageVerification from './components/ImageVerification/ImageVerification';
import LoaderAnimation from './components/LoaderAnimation/LoaderAnimation';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  
 
  return (
    <Routes>
      <Route path='/' element={<Slash />}> </Route>
      <Route path="/login" element={<Login />} />


      <Route
        path='/account-user'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Account />
          </Protected>}>

      </Route>

      <Route
        path='/setting'
        element={<Protected isLoggedIn={isLoggedIn}>
          <Setting />
        </Protected>}>

      </Route>

      <Route
        path='/information-user'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <InformationUser />
          </Protected>}>

      </Route>

      <Route
        path='/helps'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Helps />
          </Protected>}>

      </Route>

      <Route
        path='/recharge-money'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Recharge />
          </Protected>
        }>

      </Route>

      <Route
        path='/recharge-confirm'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <RechargeConfirm />
          </Protected>
        }>

      </Route>



      <Route
        path='/history'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <History />
          </Protected>
        }></Route>

      <Route
        path='/history-recharge'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <HistoryRecharge />
          </Protected>
        }>

      </Route>

      <Route
        path='/home-page'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <HomePage/>
          </Protected>
        }>
      </Route>


      <Route
        path='/change-password'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ForgotPassword />
          </Protected>
        }>

      </Route>

      <Route
        path='/success-password'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <SuccessPassword />
          </Protected>
        }>
      </Route>

      <Route
        path="/detail1/:id-:lat-:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Detail1 />
          </Protected>
        }>

      </Route>


      <Route
        path='/detail2/:id-:lat-:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Detail2 />
          </Protected>
        }>
      </Route>


      <Route
        path='/list-money-1'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoney1 />
          </Protected>
        }>

      </Route>

      <Route
        path='/list-money-complete'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoneyComplete />
          </Protected>
        }>

      </Route>

      <Route
        path='/image-verify/:id-:lat-:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ImageVerification />
          </Protected>
        }>

      </Route>

      <Route
        path='/cash-complete/:id-:lat-:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <CashComplete />
          </Protected>
        }>

      </Route>
     


    </Routes>





  );
}

export default App;
