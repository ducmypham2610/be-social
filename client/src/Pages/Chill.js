import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Chill.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Chill() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <div className="Chill">
        {/* <div className="ChillHeader">
                    <h3>PODCAST</h3>
                    <p>One podcast a day, listen and share with BeDating Cloud's stories. Thank you MAY Podcast for accompanying BeDating in the journey to touch people's hearts. The podcast was born with the purpose of healing, talking, and sharing about the life around us.
Listen to your heart's silent reminder after an endless day that you may have forgotten. There will be a world of your own, only you have the right to contemplate, decide and imagine your "crazy" things. Welcome to BeDating x MAY Podcast's podcast journey.</p>
                </div>
                <div className="ChillBody">
                    <iframe style={{borderRadius:'15px'}} src="https://open.spotify.com/embed/show/2dW02JWWfmvEivVRMF97WM?utm_source=generator&theme=0" width="1200px" height="352px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div> */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#E94057",
                height: "3px",
                borderRadius: "10px",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "20px",
                fontWeight: "650",
                color: "#000000",
                "&.Mui-selected": {
                  color: "#E94057",
                },
                "&:hover": {
                  color: "#E94057",
                  opacity: 1,
                },
              },
            }}
          >
            <Tab label="POSTCAST" {...a11yProps(0)} />
            <Tab label="CHILL" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="ChillHeader">
            <h3>BePODCAST</h3>
            <p>
              One podcast a day, listen and share with BeDating Cloud's stories.
              Thank you MAY Podcast for accompanying BeDating in the journey to
              touch people's hearts. The podcast was born with the purpose of
              healing, talking, and sharing about the life around us. Listen to
              your heart's silent reminder after an endless day that you may
              have forgotten. There will be a world of your own, only you have
              the right to contemplate, decide and imagine your "crazy" things.
              Welcome to BeDating x MAY Podcast's podcast journey.
            </p>
          </div>
          <div className="ChillBody">
            <iframe
              style={{ borderRadius: "15px" }}
              src="https://open.spotify.com/embed/show/2dW02JWWfmvEivVRMF97WM?utm_source=generator&theme=0"
              width="1200px"
              height="352px"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="ChillHeader">
            <h3>BeCHILL</h3>
            <p>
              This is the music list selected by BeDating to help give you a
              feeling of lightness and relaxation for a busy day. Maybe in
              everyday life, sometimes we have a lot of choices, but that will
              be one of the motivations to help us try harder in the future. Let
              go of all your worries, and immerse yourself in a relaxing space
              from BeChill. <br /> Let's find friends with BeChill to share all
              your emotions with BeChill.
            </p>
          </div>
          <div className="ChillBody">
            <iframe
              style={{ borderRadius: "15px" }}
              src="https://open.spotify.com/embed/playlist/7zl1RMR1wh6dEaNd4RxhnO?utm_source=generator"
              width="1200px"
              height="500px"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </TabPanel>
      </div>
    </Layout>
  );
}
