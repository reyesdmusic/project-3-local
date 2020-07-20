import React, { useState, useContext } from 'react';
import { Button, Col, Row, Form } from 'react-bootstrap';
import "./style.css";
import { searchFriend } from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ChatInput({ cb }) {


    const [chatInput, setChatInput] = useState('');
  


    // create method to search for users and set state on form submit
    const handleFormSubmit = (event) => {
        event.preventDefault();
       

        if (!chatInput) {
            return false;
        }
        let newMessage =
        {
          id: "bb",
          chatMessage: chatInput
        }

        cb(newMessage);
        
            
            
    }


    return (
     
       
      <Form onSubmit={handleFormSubmit}>
                        <Form.Row>
                            <Col xs={11} md={11} lg={11}>
                                <Form.Control
                                    id="chat-input"
                                    name='searchInput'
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    type='text'
                                    size='lg'
                                />
                            </Col>
                            <Col xs={1} md={1} lg={1}>
                                <Button id="search-icon-button" type='submit' variant='success' size='lg'>
                                    <FontAwesomeIcon  icon={faPaperPlane} size={'md'} />
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
      
  

    );

}

export default ChatInput;