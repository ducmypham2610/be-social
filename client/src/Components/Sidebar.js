import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import '../Assets/CSS/Global.css';
import Chat from '../Assets/SVG/chat.svg';
import Match from '../Assets/SVG/match.svg';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

// import { Fab } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PublicIcon from '@mui/icons-material/Public';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EditIcon from '@mui/icons-material/Edit';

import Photo from '../Assets/Images/Cloud/Rose2.jpg';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const actions = [
    { icon: <PublicIcon />, name: 'Global' },
    { icon: <AllInclusiveIcon />, name: 'Home' },
    { icon: <AccountBalanceWalletIcon />, name: 'Bank' },
    { icon: <SupportAgentIcon />, name: 'Support' },
  ];

function Sidebar() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                        <h3>Quach Cong Tuan</h3>
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
                            aria-label="Tabs where each tab needs to be selected manually"
                        >
                            <Tab label="Matches"/>
                            <Tab label="Messages" />
                        </Tabs>
                        {value === 0 && 
                            [
                                <div className="ShowMatches">
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
                            direction="right"
                            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                        >
                            {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                            ))}
                        </SpeedDial>
                    </Box>
                </div>     
            </Grid>
            </div>
        </React.Fragment>
    );
}

export default Sidebar;