//Spinner
import Spinner from "./components/Spinner/Spinner";
import { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
// import Navbar from "./components/Navbar/Navbar";
import css from "./styles/app.module.scss";
/* eslint-disable no-unused-vars */
//Pages
import Home from "./pages/Home";
import StrollDetails from "./pages/StrollDetails";
// import Banner from "./components/Banner/Banner";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import User from "./pages/User";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard/Dashboard";
import City from "./components/City/City";
import StrollEdit from "./pages/StrollEdit";
function App() {
  /* eslint-disable no-unused-vars */
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className={`bg-primary ${css.container}`}>
        {/* { location.pathname === "/" && <Header/>} */}
        {/* { location.pathname !== "/" && <Navbar/>} */}
        <Header />
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="/" element={<Landing />} />
          <Route path="/strolls" element={<Home />} />
          <Route path="/strolls/:id" element={<StrollDetails />} />
          <Route path="/strolls/:id/edit" element={<StrollEdit />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users" element={<Dashboard />} />
          <Route path="/users/:id/create" element={<Create />} />
        </Routes>
      </div>
    );
  }
}
export default App;

