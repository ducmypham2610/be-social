import React, { useEffect, useState } from "react";
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
import { getUser } from "../services/userService";
import { useParams } from "react-router-dom";
function Room() {
  const userId = localStorage.getItem("UserId");
  const roomId = useParams().id;
  console.log(roomId)
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (userId) {
      getUser(userId)
        .then((res) => {
          setUser(res.data.user);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (roomId !== null) {
      const apiKey = "3fba2778-b3ee-488a-abb6-a1347c18ecbe";
      const meetingId = roomId;
      const name = user?.name;
      console.log(meetingId);
      const config = {
        name: name,
        meetingId: meetingId,
        apiKey: apiKey,
        containerId: null,
        redirectOnLeave: "http://localhost:3000/global",

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
          visible: false, // Show the join screen ?
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
        maxResolution: "hd",
      };

      const meeting = new VideoSDKMeeting();
      meeting.init(config);
    }
  }, []);
  return <div></div>;
}

export default Room;
