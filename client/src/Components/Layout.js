import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';
import Avatar from '@mui/material/Avatar';
import Logo from '../Assets/Images/beDate.png';
import '../Assets/CSS/Global.css';

import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
  const Global = () => {
    navigate("/global");
  };
  const Home = () => {
    navigate("/home");
  };
  const Premium = () => {
    navigate("/premium");
  };
  const Support = () => {
    navigate("/support");
  };
  const Chill = () => {
    navigate("/chill");
  };
  const Matches = () => {
    navigate("/matches");
  };
  const Crush = () => {
    navigate("/crush");
  };
  const SignOut = () => {
    localStorage.clear();
    navigate("/login");
  };

export default function Layout({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Grid class="layout" container spacing={2}>
            <div className="header">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div class="layout-down">
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10} xs={12} >
                    <div className="content">
                        {children}
                    </div>
                </Grid>
            </div>
            <Grid item md={12} xs={12}>
                <div className="footer">
                <Button onClick={Home}><i class="fa-solid fa-infinity"></i></Button>
                <Button onClick={Global}><i class="fa-solid fa-earth-asia"></i></Button>
                <Button ><i class="fa-brands fa-rocketchat"></i></Button>
                {/* <Button><i class="fa-solid fa-user"></i></Button> */}
                <Button>
                <Avatar onClick={SignOut} alt="Tuan" src="/static/images/avatar/1.jpg" />
                </Button>
                </div>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}