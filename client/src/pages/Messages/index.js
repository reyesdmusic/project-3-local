import React, { useContext, useState, useEffect, useCallback } from 'react';
import "./style.css";
import SearchFriends from '../../components/SearchFriends';
import MessageList from '../../components/MessageList';
import ChatBox from '../../components/ChatBox';
import { Container, Col, Row } from 'react-bootstrap';
import UserInfoContext from '../../utils/UserInfoContext';
import * as API from '../../utils/API';
import AuthService from '../../utils/auth';


function Messages() {

  const [userListState, setUserListState] = useState([]);
  const userData = useContext(UserInfoContext);

  console.log("userDATA DREY:  ", userData);
  
  useEffect(() => {

    getAllUserMessages();
    
  
  }, [userData.username]);
    
  
  // function getAllUserMessages() {

  //       setUserListState([])
  //   userData.friends.map(friend => {

  //     API.getUser(friend.id)
  //       .then(result => {
  //         console.log("these are the results from the api call", result)
  //         setUserListState(userListState => [...userListState, result.data])
  //       })
  //     });
  // }
  
  const getAllUserMessages = useCallback(() => {
    setUserListState([]);

    userData.friends.map(friend => {

      API.getUser(friend.id)
        .then(result => {
     
          setUserListState(userListState => [...userListState, result.data])
        })
      });
  
});

   
    const sendSearchedUserToList = useCallback((userObject) => {
          setUserListState([userObject])
    });



    return (

      
      <Container id="messages-container">
      
      <h5>MESSAGES</h5>
      <div id="sm-screen-search">
      <SearchFriends cb={sendSearchedUserToList}></SearchFriends>
      </div>
      <Row>
      <Col xs={3} s={3} md={3} lg={4}>
      <div id="lg-screen-search">
      <SearchFriends cb={sendSearchedUserToList}></SearchFriends>
      </div>
      <MessageList userList={userListState} cb={getAllUserMessages}></MessageList>
      </Col>
      <Col xs={9} s={9} md={9} lg={8}>
      <ChatBox></ChatBox>
      
      </Col>
      </Row>
      
      </Container>


    );

}

export default Messages;





