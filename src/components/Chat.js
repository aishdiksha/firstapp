import { Card, CardActions, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";
import bg from "../images/chat-img.png"

const Chat = () => {
  const url = "http://localhost:5000";

  // initializing socket
  const [socket, setSocket] = useState(io(url, { autoconnect: false }));
  const [text, setText] = useState("");

  const [messageArray, setMessageArray] = useState([
      //  { text : 'Aaj kon sa exam hai?', sent : false },
      //  { text : 'rhne do, kya karoge padh kar!!', sent : true },
      //  { text : 'okay', sent : false },
  ]);

  useEffect(() => {
    socket.connect();
  }, []);

  const displayMessage = () => {
    return messageArray.map((message) => (
      <div className={message.sent ? "msg-sent message" : "msg-rec message"}>
        <p className="msg-text">{message.text}</p>
      </div>
    ));
  };

  const sendMessage = () => {
    console.log("mesg sent");
    const obj = { text: text, sent: true };

    setMessageArray([...messageArray, obj]);

    socket.emit("sendmsg", obj);
  };

  // for recieving message from server
  socket.on("recmsg", (data) => {
    console.log(data);
    setMessageArray([...messageArray, data]);
  });

  return (
    <div className="container">
      <Card>
        <CardContent
          sx={{
            background: "url("+ bg +")",
          }}
          className="chat-area"
        >
          {displayMessage()}
        </CardContent>
        <CardActions>
          <div className="input-group">
            <input
              className="form-control"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button className="btn btn-success" onClick={sendMessage}>
              Send Message
            </button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Chat;