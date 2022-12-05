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
import AuthContextProvider from "./context/AuthContext";

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
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/global" element={<Global />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/facetime" element={<Facetime />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
          {/* </Layout> */}
        </Router>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;
