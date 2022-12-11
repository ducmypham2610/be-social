import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Chill.css";
import * as React from "react";

//

export default function Chill() {
  return (
    <Layout>
      <div className="Chill">
        <div className="ChillHeader">
          <h3>PODCAST</h3>
          <p>
            One podcast a day, listen and share with BeDating Cloud's stories.
            Thank you MAY Podcast for accompanying BeDating in the journey to
            touch people's hearts. The podcast was born with the purpose of
            healing, talking, and sharing about the life around us. Listen to
            your heart's silent reminder after an endless day that you may have
            forgotten. There will be a world of your own, only you have the
            right to contemplate, decide and imagine your "crazy" things.
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
      </div>
    </Layout>
  );
}
