import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import Layout from './Components/Layout';
// Route
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Global from "./Pages/Global";
import Messages from "./Pages/Messages";
import Facetime from "./Pages/Facetime";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import About from "./Pages/Aboutme";
import Premium from "./Pages/Premium";
import Payment from "./Pages/Payment";
import Matches from "./Pages/Matches";
import Support from './Pages/Support';
import Policy from './Pages/Policy';
import Chill from './Pages/Chill';
import Intro from './Pages/Intro';
import AuthContextProvider from "./context/AuthContext";
import Profile from "./Pages/Profile";
import Crush from "./Pages/Crush";
import RoomFacetimePage from "./Pages/Roompage/facetime";
import MyProfile from "./Pages/Myprofile";
import "react-toastify/dist/ReactToastify.css";
import Room from "./Pages/Room";


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AuthContextProvider>
        <Router>
          {/* <Layout> */}
          <Routes>
          <Route path="/" element={<Welcome />} />
            <Route path="/aboutme" element={<About />} />
            <Route exact path="/room/:id" element={<Room />} />
            <Route path="/chill" element={<Chill />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/global" element={<Global />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/:friendId" element={<Messages />} />
            <Route path="/facetime" element={<Facetime />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/support" element={<Support />} />
            <Route path="/policy" element={<About />} />
            <Route path="/crush" element={<Crush />} />
          </Routes>
          {/* </Layout> */}
        </Router>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
