import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Messages.css"
import * as React from 'react';
import SendIcon from '@mui/icons-material/Telegram';
import Facetime from '@mui/icons-material/Videocam';
import { Avatar } from "@mui/material";
import { Fab } from '@mui/material';
import Images from '@mui/icons-material/InsertPhotoOutlined';
import FB from '@mui/icons-material/FacebookOutlined';
import IG from '@mui/icons-material/Instagram';
import MicIcon from '@mui/icons-material/Mic';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Jisoo from "../Assets/Images/Cloud/Jisoo2.jpg";
import Jisoo2 from "../Assets/Images/Cloud/Jisoo.jpg";

  
export default function Messages() {
    return (
        <Layout>
            <div className="Messages">
                <div className="Chat">
                    <div className="WChat">
                        <div className="Name">
                            <Avatar alt="Jisoo" src={Jisoo} />
                            <h3>Kim Ji-soo</h3>
                            <Fab size="small" color="primary" aria-label="add" style={{background:"#E94057", zIndex:"1"}}>
                                <Facetime />
                            </Fab>
                        </div>
                        <div className="History">
                            <div className="Send">
                                <div className="Text">
                                    <p>Hi, I'm Tuan When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</p>
                                </div>
                                <div className="Time">
                                    <p>12:00</p>
                                </div>
                            </div>
                            <div className="Received">
                                <div className="Text">
                                    <p>Hi, I'm Tuan When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</p>
                                </div>
                                <div className="Time">
                                    <p>12:00</p>
                                </div>
                            </div>
                            <div className="Send">
                                <div className="Text">
                                    <p>Hi, I'm Tuan When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</p>
                                    <p>Hi, I'm Tuan When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</p>
                                </div>
                                <div className="Time">
                                    <p>12:00</p>
                                </div>
                            </div>
                            <div className="Received">
                                <div className="Text">
                                    <p>Hi, I'm Tuan When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.</p>
                                </div>
                                <div className="Time">
                                    <p>12:00</p>
                                </div>
                            </div>
                        </div>
                        <div className="ToolBox">
                            <div className="image">
                                <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: "#F27121"}}>
                                    <Images />
                                </Fab>
                            </div>
                            <div className="voice">
                                <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: "#8A2BE2"}}>
                                    <MicIcon />
                                </Fab>
                            </div>
                            <div className="file">
                                <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: "#2374E1"}}>
                                    <FB />
                                </Fab>
                            </div>
                            <div className="file">
                                <Fab size="small" color="primary" aria-label="add" style={{backgroundColor: "#e94057"}}>
                                    <IG />
                                </Fab>
                            </div>
                            <div className="text">
                                <input type="text" placeholder="Type a message" />
                            </div>
                            <div className="send">
                                <Fab size="small" color="primary" aria-label="add" 
                                style={{backgroundColor: "#e94057"}}>
                                    <SendIcon />
                                </Fab>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Profile">
                    <div className="Main">
                        <img src={Jisoo} />
                    </div>
                    <div className="Info">
                        <div className="Name">
                            <h3>Kim Ji-soo, <span>27</span></h3>
                            <p>FPT Education</p>
                            <p>Business</p>
                        </div>
                    </div>
                    <div className="Album">
                        <ImageList sx={{ width: 450, height: 250 }} cols={3} rowHeight={145}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>
        </Layout>
    )
}



//DATA 
const itemData = [
  {
    img: Jisoo,
    title: 'Jisoo',
  },
  {
    img: Jisoo2,
    title: 'Jisoo',
  },
  {
    img: Jisoo,
    title: 'Jisoo',
  },
  {
    img: Jisoo,
    title: 'Jisoo',
  },
  {
    img: Jisoo2,
    title: 'Jisoo',
  },
  {
    img: Jisoo,
    title: 'Jisoo',
  },
];