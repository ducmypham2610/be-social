import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Home.css";
import React, { useState, useMemo, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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
