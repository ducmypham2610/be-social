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
                            <Tab label="Hangout" {...a11yProps(1)} />
                            <Tab label="Friendzone" {...a11yProps(2)} />
                            <Tab label="Findout" {...a11yProps(3)} />
                            <Tab label="Dating" {...a11yProps(4)} />
                            <Tab label="Hangout" {...a11yProps(5)} />
                            <Tab label="Hotel" {...a11yProps(6)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="crushItem">
                                
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>
                    </Box>
                </div>
            </div>
        </Layout>
    );
}
