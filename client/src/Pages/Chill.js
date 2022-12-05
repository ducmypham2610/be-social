import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Chill.css";
import * as React from 'react';

export default function Chill() {
    return (
        <Layout>
            <div className="Chill">
                <div className="ChillHeader">
                    <h3>CHILL</h3>
                </div>
                <div className="ChillBody">
                    <iframe style={{borderRadius:'15px'}} width="47%" height="380" src="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk?controls=0&modestbranding" frameborder="0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
                    <iframe style={{borderRadius:'15px'}} width="20%" height="380" src="https://www.youtube.com/live_chat?is_popout=1&v=jfKfPfyJRdk" frameborder="0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" ></iframe>
                </div>
            </div>
        </Layout>
    );
}