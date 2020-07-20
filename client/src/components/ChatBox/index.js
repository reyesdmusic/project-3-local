import React, { useEffect, useRef, useContext, useCallback, useState } from 'react';
import { animateScroll } from "react-scroll";
import "./style.css";
import { Col, Row } from 'react-bootstrap';
import UserInfoContext from '../../utils/UserInfoContext';
import ChatInput from '../ChatInput';

function ChatBox() {

  const userData = useContext(UserInfoContext);
  const [convoState, setConvoState] = useState([]);
   
  let myConvo = [
    {
      id: "aldkjfald",
      chatMessage: "hey how's it going?"
    },
    {
      id: "bb",
      chatMessage: "pretty good, how are you"
    },
    {
      id: "a8999999",
      chatMessage: "I'm fine again"
    },
    
    {
      id: "bb",
      chatMessage: "pretty good, how are you youyouyouyou pretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyoupretty good, how are you youyouyouyou"
    },
    {
      id: "a8999999",
      chatMessage: "I'm fine again"
    },
    {
      id: "bb",
      chatMessage: "pretty good, how are you"
    },
    {
      id: "a8999999",
      chatMessage: "I'm fine again"
    },
    {
      id: "aere4545",
      chatMessage: "oh you are?"
    },
    {
      id: "bb",
      chatMessage: "yeah life is good"
    },
    {
      id: "90909gakjfhga",
      chatMessage: "well that's great to hear"
    }

  ]
  
    
  const messagesEndRef = useRef(null)

  function scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "chat-box-body"
    });
}

  useEffect(() => {

    setConvoState(myConvo);
    
    scrollToBottom();
  
  
  }, [userData]);


  useEffect(() => {

   
    
    scrollToBottom();
  
  
  }, [convoState]);


  const handleSendMessage = useCallback((message) => {
    
    setConvoState(convoState => [...convoState, message])
    scrollToBottom();
  });

   
  

    return (
        <div>
        <div ref={messagesEndRef} id="chat-box-body">
        {convoState.map((convo => {
          

          if (convo.id === "bb") {
            return (
              <Row id="chat-message-row">
                <Col xs={6} sm={6} md={6} lg={6}></Col>
              <Col xs={6} sm={6} md={6} lg={6}>
              <div id="this-user-message">
                {convo.chatMessage}
              </div>
              </Col>
              </Row>
               
            )


          }
          return (
            <Row id="chat-message-row">
            <Col xs={6} sm={6} md={6} lg={6}>
            <div id="that-user-message">
              {convo.chatMessage}
            </div>
            </Col>
            </Row>
          )



        }))}

        
        </div>
        <ChatInput cb={handleSendMessage}></ChatInput>
        </div>

    );

}

export default ChatBox;