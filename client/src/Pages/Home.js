import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Home.css";
import React, { useState, useMemo, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Photo from "../Assets/Images/Cloud/Jisoo.jpg";
import Photo2 from "../Assets/Images/Cloud/Rose.jpg";
import Photo3 from "../Assets/Images/Cloud/Nancy.jpg";
import Photo4 from "../Assets/Images/Cloud/Min.jpg";
import { useEffect } from "react";
import SwipeCard from "../Components/SwipeCard";

export default function Home() {
  const navigate = useNavigate();
  const contextDataAuth = useContext(AuthContext);
  const { isAuthen } = contextDataAuth.authContext;

  useEffect(() => {
    if (isAuthen === null) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout>
      <div className="Home">
        <SwipeCard />
      </div>
    </Layout>
  );
}
