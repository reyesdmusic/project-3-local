import React from 'react';
import "./style.css";
import { Col, Row } from 'react-bootstrap';



function UserInfoLi({ user }) {

    return (

      
    
          <button id="li-button">
              
                <Row id="table-row">
                    <Col xs={12} s={12} md={2} lg={2} id="picture-td"><img id="li-picture" src={user.picture} /></Col>
                    <Col xs={12} s={12} md={10} lg={10} className="text-left" id="name-td"><p id="name-p">{user.username}</p></Col>   
                </Row>
              
              
          </button>
          
     


    );

}

export default UserInfoLi;