import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./pages/Signup";
import Task from "./pages/Task";
import Login from "./pages/Login";
// import Home from "./pages/Home";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { saveProfile } from "./redux/actions/authActions";

function App() {
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    dispatch(saveProfile(token));
  }, [authState.isLoggedIn, dispatch]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={authState.isLoggedIn ? <Navigate to="/" /> : <Signup />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/tasks/add" element={authState.isLoggedIn ? <Task /> : <Navigate to="/login" state={{ redirectUrl: "/tasks/add" }} />} />
          <Route path="/tasks/:taskId" element={authState.isLoggedIn ? <Task /> : <Navigate to="/login" state={{ redirectUrl: window.location.pathname }} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
