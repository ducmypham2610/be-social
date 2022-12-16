import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Premium.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Premium() {
  const navigate = useNavigate();
  const [premiums, setPremiums] = useState([]);

  const getPremiums = async () => {
    try {
      const response = await axios.get("http://localhost:8000/types/");
      console.log(response);
      const data = response.data.types.map((item) => {
        return {
          id: item._id,
          name: item.name,
          price: item.price,
          description: item.description.split("."),
        };
      });
      setPremiums(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPremiums();
  }, []);

  const goToPayment = (id) => {
    navigate(`/payment/${id}`);
  };

  return (
    <Layout>
      <div className="Premium">
        <div className="Premium-Content">
          <h1 className="Be">BePremium</h1>
          <p>Choose to use great experiences on BeDating</p>
        </div>
        <div className="Choice">
          {premiums?.map((item, index) => (
            <div className="Choice-Content" key={index}>
              <div className="Title">
                <h1
                  className={
                    item.name === "TITAN"
                      ? "Titan"
                      : item.name === "GOLD"
                      ? "Gold"
                      : item.name === "PLATINUM"
                      ? "Platinum"
                      : ""
                  }
                >
                  {item.name}
                </h1>
                <p>{item.price}</p>
              </div>
              <div className="Button">
                <Button
                  onClick={() => goToPayment(item.id)}
                  variant="contained"
                >
                  BUY
                </Button>
              </div>
              <div className="Des">
                <ul>
                  {item.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}