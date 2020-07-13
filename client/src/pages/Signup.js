import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import SignupForm from '../components/SignupForm';
import { Link } from "react-router-dom";
import UserInfoContext from '../utils/UserInfoContext';

function Signup() {
  
  const userData = useContext(UserInfoContext);

  return (

    userData.username ? window.location.assign('/home') :

    <>
      <Container>
      <SignupForm />
      </Container>
      <Link as={Link} to='/'>
        Login
      </Link>
    </>
  );
}

export default Signup;