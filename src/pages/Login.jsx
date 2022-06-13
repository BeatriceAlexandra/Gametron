import React, { useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import './Login.css';
import { connect} from 'react-redux';
import { loginUser } from '../redux/actions/user';
import styled from'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
  url("https://i.imgur.com/1P0bOz1.jpg");
  background-size: cover;
  align-items: center;
  justify-content: center;
  display:flex;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 0px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color:white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  padding: 15px 20px;
  background-color: #8858ed;
  color: white;
  cursor: pointer;
`;
function Login (props, prevProps) {
  const navigate=useNavigate ();

  useEffect (()=>{
    if (props.userData!==prevProps.userData)
    return()=>{
      navigate("/")
    };
  });
   
      const {loginUser} = props;
    
    return (

          <Container>
            <Wrapper>
          <div className="login-page">
          
                <Link to='/'>
                    <img src={logo} alt="logo" className="mb-5"/>
                </Link>
            
                <h1 className="h2">Login</h1>
                <Link to='/' className="text-white h3 mb-5">Înapoi la pagina principală</Link>
                
                <Title>SIGN IN</Title>
                <Form>
                  <Input 
                      type="text" required
                      name="name"
                      placeholder="username" />
                  <Input 
                      type="password" required
                      name="name"
                      placeholder="password" />
                  <Button className="loginButton btn btn-outline-light">LOGIN</Button>
                  <Link to="/register" className=' text text-white'>FORGOT YOUR PASSWORD?</Link>
                  <Link to="/register" className=' text text-white'>CREATE A NEW ACCOUNT</Link>
                </Form>
                <button 
                    className=" Google btn btn-outline-light d-flex align-items-center"
                    onClick= {() => loginUser() }
                    >
                    <Google className="w-50 mr-3"/>
                    <span className="text-nowrap"> Google Sign In </span>
                </button>
            
          </div>
          </Wrapper>
        </Container>
      );
  }
// }
function mapStateToProps (state) {
    return {
      userData: state.user.data
    }
}

function mapDispatchToProps (dispatch) {
    return {
        loginUser: () => { dispatch(loginUser())}
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Login);
