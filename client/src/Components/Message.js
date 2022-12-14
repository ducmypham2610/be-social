import React from "react";
import {format} from 'timeago.js'


function Message({ message, own }) {
  return (
    <>
      {own ? (
        <div className="Send">
          <div className="Text">
            <p>
            {message.text}
            </p>
          </div>
          <div className="Time">
            <p>{format(message.createdAt)}</p>
          </div>
        </div>
      ) : (
        <div className="Received">
          <div className="Text">
            <p>
            {message.text}
            </p>
          </div>
          <div className="Time">
            <p>{format(message.createdAt)}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;