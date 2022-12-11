<<<<<<< HEAD
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useState, useMemo, useRef, useContext } from "react";
import * as React from 'react';
import '../Assets/CSS/Pages/Matches.css';
import Layout from "../Components/Layout";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Love from '@mui/icons-material/FavoriteRounded';
import Deny from '@mui/icons-material/ClearRounded';
=======
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
>>>>>>> 879bc976444799d2fe6938ee1ce6367e90c82683



export default function Matches() {
<<<<<<< HEAD
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
            <div className="Matches">
                <div className="MatchHeader">
                    <h1>Matches</h1>
                    <p>This is a list of people who have liked you and your matches.</p> 
                </div>
                <div className="MatchBody">
                    <div className="Card">
                        <div className="Blur">
                            <div className="CardHeader">
                                <p>Rose, 23</p>
                                <div className='CardHeaderIcons'>
                                    <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                        <Button><Love/></Button>
                                        <Button><Deny/></Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>

                    <div className="Card">
                        <div className="CardHeader">
                            <p>Rose, 23</p>
                            <div className='CardHeaderIcons'>
                                <ButtonGroup size="large" variant="contained" aria-label="outlined primary button group">
                                    <Button><Love/></Button>
                                    <Button><Deny/></Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
=======
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState(null);
  const [matchesUser, setMatchesUser] = useState([]);

  useEffect(() => {
    getUser(userId)
      .then((res) => {
        setUser(res.data.user);
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
          <div className="Card">
            <div className="Blur">
              <div className="CardHeader">
                <p>Rose, 23</p>
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
>>>>>>> 879bc976444799d2fe6938ee1ce6367e90c82683
                </div>
              </div>
            </div>
          </div>
          {matchesUser?.map((character, index) => (
            <div className="Card" style={{ backgroundImage: `url('/img/avatar/${character.photo}')`}}>
              <div className="CardHeader">
                <p>{character.name}, {calculateAge(character.dob)}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
