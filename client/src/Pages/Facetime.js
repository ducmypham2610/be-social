import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Facetime.css"
import * as React from 'react';
import { Avatar } from "@mui/material";
import { Fab } from '@mui/material';

import Call from '@mui/icons-material/Call';
import Video from '@mui/icons-material/Videocam';
import More from '@mui/icons-material/MoreHoriz';



export default function Facetime() {
    return (
        <Layout>
            <div className="Facetime">
                <div className="Screen">
                    <iframe src="https://www.youtube.com/embed/9bZkp7q19f0" title="BeDating Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="ToolFacetime">
                    <Fab size="small" color="secondary" aria-label="add">
                        <Video />
                    </Fab>
                    <Fab className="Icon" color="primary" aria-label="add" style={{background:'#E94057'}}>
                        <Call />
                    </Fab>
                    <Fab size="small" aria-label="add" style={{background:'#20222a', color:'white'}}>
                        <More />
                    </Fab>
                </div>
            </div>
        </Layout>
    );
}