import { Suspense, useState } from "react";
import {
  Navigate,
  Outlet,
  Route,
  RouteObject,
  Routes,
  useRoutes,
} from "react-router-dom";
import Account from "../components/Account/Account";
import CashComplete from "../components/CashComplete/CashComplete";
import Detail1 from "../components/Detail1/Detail1";
import Detail2 from "../components/Detail2/Detail2";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import Helps from "../components/Helps/Helps";
import HistoryRecharge from "../components/HistoryRecharge/HistoryRecharge";
import HomePage from "../components/HomePage/HomePage";
import ImageVerification from "../components/ImageVerification/ImageVerification";
import InformationUser from "../components/InformationUser/InformationUser";
import ListMoney1 from "../components/ListMoney1/ListMoney1";
import ListMoneyComplete from "../components/ListMoneyComplete/ListMoneyComplete";
import Login from "../components/Login/Login";
import Protected from "../components/Protected";
import Recharge from "../components/Recharge/Recharge";
import RechargeConfirm from "../components/RechargeConfirm/RechargeConfirm";
import Setting from "../components/Setting/Setting";
import Slash from "../components/Slash/Slash";
import SuccessPassword from "../components/Union/SuccessPassword/SuccessPassword";
import { AUTH_ROUTES } from "../shared/constants/routes.constants";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Slash />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/account-user"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Account />
          </Protected>
        }
      />
      <Route
        path="/setting"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Setting />
          </Protected>
        }
      />
      <Route
        path="/information-user"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <InformationUser />
          </Protected>
        }
      />
      <Route
        path="/helps"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Helps />
          </Protected>
        }
      />
      <Route
        path="/recharge-money"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Recharge />
          </Protected>
        }
      />
      <Route
        path="/recharge-confirm"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <RechargeConfirm />
          </Protected>
        }
      />
      <Route
        path="/history"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <History />
          </Protected>
        }
      />
      <Route
        path="/history-recharge"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <HistoryRecharge />
          </Protected>
        }
      />
      <Route
        path="/home-page"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <HomePage />
          </Protected>
        }
      />
      <Route
        path="/change-password"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ForgotPassword />
          </Protected>
        }
      />
      <Route
        path="/success-password"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <SuccessPassword />
          </Protected>
        }
      />
      <Route
        path="/detail1/:id-:lat-:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Detail1 />
          </Protected>
        }
      />
      <Route
        path="/detail2/:id-:lat-:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Detail2 />
          </Protected>
        }
      />
      <Route
        path="/list-money-1"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoney1 />
          </Protected>
        }
      />
      <Route
        path="/list-money-complete"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ListMoneyComplete />
          </Protected>
        }
      />
      <Route
        path="/image-verify/:id-:lat-:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <ImageVerification />
          </Protected>
        }
      />
      <Route
        path="/cash-complete/:id-:lat-:lng"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <CashComplete />
          </Protected>
        }
      />
    </Routes>
  );
}

const privateRoutes: RouteObject[] = [
  {
    element: <TutorVerificationListPage />,
    path: "/tutor-requests",
  },
];

const authRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.signIn,
    element: <SignInPage />,
  },
  {
    element: <ForgotPasswordPage />,
    path: AUTH_ROUTES.forgotPassword,
  },
  {
    element: <ResetPasswordPage />,
    path: AUTH_ROUTES.resetPassword,
  },
];

export function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate to="/tutor-requests" />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      ),
      children: privateRoutes,
    },
    {
      path: "/",
      element: (
        <AuthRoute>
          <Outlet />
        </AuthRoute>
      ),
      children: authRoutes,
    },
  ]);

  return <Suspense fallback={<div>Loading ...</div>}>{routes}</Suspense>;
}

export default App;
