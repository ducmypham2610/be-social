import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Facetime.css";
import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { Fab } from "@mui/material";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";

import Call from "@mui/icons-material/Call";
import Video from "@mui/icons-material/Videocam";
import More from "@mui/icons-material/MoreHoriz";

export default function Facetime() {
  useEffect(() => {
    const apiKey = "3fba2778-b3ee-488a-abb6-a1347c18ecbe";
    const meetingId = "milkyway";
    const name = "Demo User";
    const config = {
        name: name,
      meetingId: meetingId,
      apiKey: apiKey,
      containerId: null,
      redirectOnLeave: "https://www.videosdk.live/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: "https://www.videosdk.live/callback",
      recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path

      brandingEnabled: true,
      brandLogoURL: "https://picsum.photos/200",
      brandName: "Awesome startup",

      participantCanLeave: true, // if false, leave button won't be visible

      livestream: {
        autoStart: true,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        removeParticipant: true, // Remove other participant from meeting
        endMeeting: true, // End meeting for all participant
        drawOnWhiteboard: true, // Can Draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle recording
      },

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Daily scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },

      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "https://videosdk.live/", // action button href
        },
      },
      maxResolution: 'hd',
    };

    const meeting = new VideoSDKMeeting();
    meeting.init(config);
  }, []);
  return (
      <div></div>
  );
}
