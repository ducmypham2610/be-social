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



export default function Matches() {
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
                </div>
            </div>
        </Layout>
    );
}

