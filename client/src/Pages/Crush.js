import '../Assets/CSS/Pages/Crush.css';
import Layout from "../Components/Layout";
import Robot from "../Assets/Gif/Robot.gif";

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Crush() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   return (
        <Layout>
            <div className="crush">
                <div className="crushHeader">
                    <h1>BeTek</h1>
                    <p>Vitual Assistant BeTek will give you tips for chatting with your Crush.</p>
                </div>
                <div className="crushBody">
                    <img src={Robot} alt="crush" />
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                        >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ 
                                borderRight: 1,
                                borderColor: 'divider',
                                width: 300,
                                height: 300,
                                overflow: 'auto',
                                position: 'relative',
                                color:'#E94057',
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#E94057',
                                    height: '3px',
                                    borderRadius: '10px'
                                },
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    fontSize: '20px',
                                    fontWeight: '450',
                                    color: '#000000',
                                    '&.Mui-selected': {
                                        color: '#E94057',
                                    },
                                    '&:hover': {
                                        color: '#E94057',
                                        opacity: 1,
                                    },
                                },
                            }}
                        >
                            <Tab label="Started" {...a11yProps(0)} />
                            <Tab label="Continue" {...a11yProps(1)} />
                            <Tab label="Find" {...a11yProps(2)} />
                            <Tab label="Specialization" {...a11yProps(3)} />
                            <Tab label="Mention" {...a11yProps(4)} />
                            <Tab label="Dating" {...a11yProps(5)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="crushItem">
                                <h1>The best way to start a conversation with me is to ...</h1>
                                <div className="crushItemBody">
                                    <p>Send the first messages</p>
                                    <p>Ask me a questions</p>
                                    <p>Compliment me</p>
                                    <p>Be funny</p>
                                    <p>Introduce yourself</p>
                                    <p>Say more than "Hey" or "How are you?"</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="crushItem">
                                <h1>The best way to Continue a conversation with me is to ...</h1>
                                <div className="crushItemBody">
                                    <p>Be honest</p>
                                    <p>Ask me questions</p>
                                    <p>Compliment me</p>
                                    <p>Mention something that we have in common</p>
                                    <p>Be funny</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="crushItem">
                                <h1>I like to ...</h1>
                                <div className="crushItemBody">
                                    <p>Cinema</p>
                                    <p>Coffee</p>
                                    <p>Pets</p>
                                    <p>Shopping</p>
                                    <p>Netflix and chill</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <div className="crushItem">
                                <h1>My specialization ...</h1>
                                <div className="crushItemBody">
                                    <p>Business</p>
                                    <p>Information</p>
                                    <p>Design</p>
                                    <p>Others</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <div className="crushItem">
                                <h1>Please Mention ...</h1>
                                <div className="crushItemBody">
                                    <p>Assignment</p>
                                    <p>Friend</p>
                                    <p>Mentor</p>
                                    <p>Travel</p>
                                    <p>Game</p>
                                    <p>Music</p>
                                    <p>Some location you know</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <div className="crushItem">
                                <h1>Date ideas that I'm open to are ...</h1>
                                <div className="crushItemBody">
                                    <p>Dinner</p>
                                    <p>Anything with food</p>
                                    <p>Cinema (CGV/BHD/Lotte/...)</p>
                                    <p>Something outdoors</p>
                                    <p>Coffee</p>
                                    <p>Something local</p>
                                    <p>Something outdoors</p>
                                    <p>Something casual</p>
                                </div>
                            </div>
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </Layout>
    );
}
