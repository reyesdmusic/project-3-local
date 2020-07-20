import React, { useState, useEffect } from 'react';
import "./style.css";
import UserInfoLi from "../../components/UserInfoLi"
import { Button } from 'react-bootstrap';



function MessageList({userList, cb}) {

  const [userListState, setUserListState] = useState([]);
  
  useEffect(() => {

  setUserListState(userList);
  }, [userList]);


  

    return (
      
      <div>
         <Button id="all-messages-button" onClick={() => cb()}>ALL MESSAGES</Button>
      <div id="message-list-div">
       
         
          
            
       
       
        {userListState.map(user => {
              {
                return (
                //  <img src={message.picture}/>

                <UserInfoLi user={user}/>
                );
              }
           
            })}
       
        
        {console.log("from message list component,", userListState)}
      </div>
      </div>

    );

}

export default MessageList;