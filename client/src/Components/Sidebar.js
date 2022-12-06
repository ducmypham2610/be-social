import * as React from 'react';
import { useState, useEffect } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import '../Assets/CSS/Global.css';
import Chat from '../Assets/SVG/chat.svg';
import Match from '../Assets/SVG/match.svg';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PodcastsIcon from '@mui/icons-material/Podcasts';
// import { Fab } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublicIcon from '@mui/icons-material/Public';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EditIcon from '@mui/icons-material/Edit';
import Logout from '@mui/icons-material/Lock';

import Photo from '../Assets/Images/Cloud/Rose2.jpg';
import { useNavigate } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import { getUser } from "../services/userService";



function Sidebar() {
    const userId = localStorage.getItem("UserId");
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser(userId)
          .then((res) => setUser(res.data.user))
          .catch((err) => console.log(err));
      }, []);
      const [value, setValue] = React.useState(0);
      const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const actions = [
        { icon: <PublicIcon />, name: 'Global'},
        { icon: <AllInclusiveIcon />, name: 'Home'},
        { icon: <AccountBalanceWalletIcon />, name: 'Premium' },
        { icon: <SupportAgentIcon />, name: 'Support' },
        { icon: <PodcastsIcon />, name: 'Chill' },
        { icon: <Logout />, name: 'Logout' },
      ];

        const navigate = useNavigate();
        const Global = () => {
        navigate('/global');
        };
        const Home = () => {
            navigate('/home');
        };
        const Premium = () => {
            navigate('/premium');
        };
        const Support = () => {
            navigate('/Support');
        };
        const Chill = () => {
            navigate('/Chill');
        };
        const Messages = () => {
            navigate('/Messages');
        };
        const Matches = () => {
            navigate('/Matches');
        };
        const SignOut = () => {
            localStorage.clear();
            navigate('/login');
        };


    
    return (
        <React.Fragment>
        <CssBaseline />
            <div className="sidebar">
            <Grid item md={12}>
                <div className="Profile">
                    <div className="ProfileImage">
                        <a href="/profile"> <Avatar sx={{ width: 55, height: 55 }} src="/static/images/avatar/1.jpg" alt='Tuan'/> </a>
                    </div>
                    <div className="ProfileName">
                        <h3>{user?.name}</h3>
                        <p>@TunnieTek</p>
                    </div>
                    {/* <div className="Nav">
                        <button><i class="fa-solid fa-earth-asia"></i></button>
                    </div> */}
                </div>
                <div className="Menu">
                    <Box sx={{ width: '100%' }}>
                        <Tabs
                            onChange={handleChange}
                            value={value}
                            variant="fullWidth"
                            textColor="black"
                            TabIndicatorProps={{ style: { backgroundColor: '#E94057', height:'3px' } }}
                        >
                            <Tab label="Matches" />
                            <Tab label="Messages"/>
                        </Tabs>
                        {value === 0 && 
                            [
                                <div className="ShowMatches" onClick={Matches}>
                                    <img src={Photo} alt="Match" className="CountMatches" />
                                    <button>18</button>
                                </div>
                                // <img src={Match} alt="match" className="match" />,
                                // <h3>Start Matching</h3>,
                                // <p>Looking to strike up a conversation? When you match with others, you can send them a mesages under "Matches"</p>
                            ]
                        }
                        {value === 1 && 
                            [
                                <div className="ListChat"> 
                                    <button onClick={Messages}>
                                        <div className="KeyChat Selected">
                                            <div className="KeyChatImage">
                                                <Avatar alt="Tuan" src="/static/images/avatar/1.jpg" />
                                            </div>
                                            <div className="KeyChatName">
                                                <h3>Kim Ji-soo</h3>
                                                <p>Hi, I'm Tuan When the component is dynamically</p>
                                            </div>
                                            <div className="KeyChatTime">
                                                <p>12:00</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                // <img src={Chat} alt="Chat" className="chat" />,
                                // <h3>Say Hello</h3>,
                                // <p>Looking to strike up a conversation? When you match with others, you can send them a mesages under "Matches"</p>
                            ]
                        }
                    </Box>
                </div>
                <div className="Direct">
                    <Box sx={{ height: 220, transform: 'translateZ(0px)', flexGrow: 1, position:'fixed', bottom:'0', left:'0' }}>
                        <SpeedDial
                            ariaLabel="SpeedDial openIcon example"
                            sx={{ position: 'absolute', bottom: 5, left: 5 }}
                            // Change direction to open up
                            direction="up"
                            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                        >
                            {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.name === 'Global' ? Global : action.name === 'Home' ? Home : action.name === 'Premium' ? Premium : action.name === 'Support' ? Support : action.name === 'Chill' ? Chill : action.name === 'Logout' ? SignOut : null}
                            />
                            ))}
                        </SpeedDial>
                    </Box>
                </div>
                {/* <iframe style={{marginTop:'40vh'}} src="https://open.spotify.com/embed/playlist/7zl1RMR1wh6dEaNd4RxhnO?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>      */}
            </Grid>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;