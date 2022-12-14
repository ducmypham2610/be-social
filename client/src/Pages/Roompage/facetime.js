import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomFacetimePage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 1839479524;
        const serverSecret = "71b92025fda86b3071892377656d3d56";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            Date.now().toString(), 
            "User"
            );
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http//localhost:3000/room/${roomId}`,
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: false,
            });
    };

    return (
        <div>
            <div ref={myMeeting}></div>
        </div>
    )
};

export default RoomFacetimePage;