import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Slash from './components/Slash/Slash';
import Login from './components/Login/Login';
import ChangePassword from './components/ChangePassword/ChangePassword';
import ChangePasswordSuccess from './components/ChangePasswordSuccess/ChangePasswordSuccess';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import SuccessRecoverPassword from './components/SuccessRecoverPassword/SuccessRecoverPassword';
import Account from './components/Account/Account';
import Setting from './components/Setting/Setting';
import InformationUser from './components/InformationUser/InformationUser';
import Helps from './components/Helps/Helps';
import Recharge from './components/Recharge/Recharge';
import RechargeConfirm from './components/RechargeConfirm/RechargeConfirm';
import History from './components/History/History';
import HistoryRecharge from './components/HistoryRecharge/HistoryRecharge';
import HomePage from './components/HomePage/HomePage';
import DetailTakeCollect from './components/DetailTakeCollect/DetailTakeCollect';
import DetailStartCollect from './components/DetailStartCollect/DetailStartCollect';
import ListMoney from './components/ListMoney/ListMoney';
import ListMoneyComplete from './components/ListMoneyComplete/ListMoneyComplete';
import CashComplete from './components/CashComplete/CashComplete';
import Protected from './components/Protected';
import ImageVerification from './components/ImageVerification/ImageVerification';
import { UserProvider } from './context/UserContext/UserContext';
import EditProfile from './components/EditProfile/EditProfile';
import PageNotFound from './components/PageNotFound/PageNotFound';
import SwipeableButton from './components/SwipeButton/SwipeButton';
import Test from './components/Test';
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
            <UserProvider>
              <Account />
            </UserProvider>
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
        path='/change-password'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ChangePassword />
          </Protected>}>

      </Route>

      <Route
        path='/edit-profile'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <EditProfile />
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
            <UserProvider>
              <HomePage />
            </UserProvider>
          </Protected>
        }>
      </Route>


      <Route
        path='/forgot-password'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ForgotPassword />
          </Protected>
        }>
      </Route>

      <Route
        path='/change-password-success'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ChangePasswordSuccess />
          </Protected>
        }>
      </Route>

      <Route
        path='/success-recover-password'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <SuccessRecoverPassword />
          </Protected>
        }>
      </Route>

      <Route
        path="/detail-take-collect/:id/:lat/:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <DetailTakeCollect />
          </Protected>
        }>

      </Route>


      <Route
        path='/detail-start-collect/:id/:lat/:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <DetailStartCollect />
          </Protected>
        }>
      </Route>


      <Route
        path='/list-money/:id/:lat/:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoney />
          </Protected>
        }>

      </Route>

      <Route
        path='/list-money-complete/:id/:lat/:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoneyComplete />
          </Protected>
        }>

      </Route>

      <Route
        path='/image-verify/:id/:lat/:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ImageVerification />
          </Protected>
        }>

      </Route>

      <Route
        path='/cash-complete/:id/:lat/:lng'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <CashComplete />
          </Protected>
        }>
      </Route>

      <Route
        path='*'
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <PageNotFound />
          </Protected>
        }>
      </Route>

    </Routes>
 
  );
}

export default App;
