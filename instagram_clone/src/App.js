import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import EditProfile from "./components/EditProfile/EditProfile";
import ProfileAllPosts from "./components/ProfileAllPosts/ProfileAllPosts";
import SavedContent from "./components/SavedContent/SavedContent";
import Verify from "./components/Verify/Verify";
import VerifyGenNum from "./components/Verify/VerifyGenNum/VerifyGenNum";
import AccountEdit from "./pages/AccountEdit/AccountEdit";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Home from "./pages/Home/Home";
import HomeLogin from "./pages/HomeLogin/HomeLogin";
import Login from "./pages/Login/Login";
import PasswordRecover from "./pages/PasswordRecover/PasswordRecover";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import { getSingleUser, logedInMe } from "./redux/auth/actionType";
import SingleUserProfile from "./pages/SingleUserProfile/SingleUserProfile";

const App = () => {
  const { isLogedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("authToken");
    dispatch(logedInMe(token));
  }, [logedInMe]);

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        style={{ zIndex: "99999999" }}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={isLogedIn ? <Home /> : <HomeLogin />} />
        {/* Profile */}
        <Route path="/:id" element={isLogedIn ? <Profile /> : <HomeLogin />}>
          <Route index element={<ProfileAllPosts />} />
          <Route path="/:id/saved" element={<SavedContent />} />
        </Route>

        {/* Singel User Profile */}
        <Route
          path="/user/:userName"
          element={isLogedIn ? <SingleUserProfile /> : <HomeLogin />}
        >
          <Route index element={<ProfileAllPosts />} />
          <Route path="/user/:userName/saved" element={<SavedContent />} />
        </Route>

        <Route
          path="/edit"
          element={isLogedIn ? <AccountEdit /> : <HomeLogin />}
        >
          <Route index element={<EditProfile />} />
          <Route path="/edit/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/activate-account/:token" element={<Verify />} />
        <Route path="/user/verify" element={<VerifyGenNum />} />
        <Route path="/user/forgotpassword" element={<ForgotPassword />} />
        <Route path="/user/:id/:token" element={<PasswordRecover />} />
      </Routes>
    </div>
  );
};

export default App;
