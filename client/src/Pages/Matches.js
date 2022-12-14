import "../Assets/CSS/Pages/Matches.css";
import Layout from "../Components/Layout";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Love from "@mui/icons-material/FavoriteRounded";
import Deny from "@mui/icons-material/ClearRounded";
import axios from "axios";
// import { getAllMatches } from '../services/userService';
import { getUser } from "../services/userService";

export default function Matches() {
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState(null);
  const [matchesUser, setMatchesUser] = useState([]);
  const [likedByUser, setLikedByUser] = useState([]);

  useEffect(() => {
    getUser(userId)
      .then((res) => {
        setUser(res.data.user);
        setLikedByUser(res.data.likedByUsers);
      })
      .catch((err) => console.log(err));
  }, []);
  const getAllMatches = async (userId) => {
    try {
      const response = await axios.get(
        "http://localhost:8000/users/get-matches",
        {
          params: { id: userId },
        }
      );
      setMatchesUser(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (userId) {
      getAllMatches(userId);
    }
  }, [userId]);

  const calculateAge = (dob) => {
    const yearOfBirth = new Date(dob).getFullYear();
    const now = new Date().getFullYear();
    const age = now - yearOfBirth;
    return age;
  };

  return (
    <Layout>
      <div className="Matches">
        <div className="MatchHeader">
          <h1>Matches</h1>
          <p>This is a list of people who have liked you and your matches.</p>
        </div>
        <div className="MatchBody">
          {likedByUser?.map((character, index) => (
            <div className="Card" key={index}>
              <div className="Blur">
                <div className="CardHeader">
                  <p>{character.name}, {calculateAge(character.dob)}</p>
                  <div className="CardHeaderIcons">
                    <ButtonGroup
                      size="large"
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button>
                        <Love />
                      </Button>
                      <Button>
                        <Deny />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {matchesUser?.map((character, index) => (
            <div
              className="Card"
              style={ user?.type === 'normal' ? {
                backgroundImage: `url('/img/avatar/${character.photo}')`,
              } : {}}
              key={index}
            >
              <div className="CardHeader">
                <p>
                  {character.name}, {calculateAge(character.dob)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}