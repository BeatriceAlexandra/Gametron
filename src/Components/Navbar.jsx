import styled from 'styled-components';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Badge } from '@mui/material';


const Container = styled.div`
  height: 60px;
  color:white;
  background:black;
  @media only screen and (max-width:380px){
      display:none;
  }
`;
const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Input = styled.input`
    border: none;
    background:none;
    color:white;
`;

const Logo = styled.h2`
    font-weight: bold;
    text-align: center
`;

const Right = styled.div`
    flex:1;
`;

function Navbar (props) {
    const { numberOfProducts } = props;
    
    return (
            <Container>
                    <Wrapper>

                        <Left>
                            <Language>RO</Language>
                            <SearchContainer>
                                <Input/>
                                <SearchIcon/>
                            </SearchContainer>
                        </Left>

                        <Center>
                            <Logo> GAMETRON.</Logo>
                        </Center>

                        <Right>
                                <div className="cos">                                                                        
                                       
                                            <Link to="/cart" className="d-flex justify-content-end">
                                                    <ShoppingCart/>                   
                                                      <Badge badgeContent={numberOfProducts} color="secondary">
                                                        </Badge>
                                            </Link>   
                                </div>   
                        </Right>
                    </Wrapper>
            </Container>      
    );
}

function mapStateToProps (state) {
    return {
          numberOfProducts: state.cart.products.length,
          user: state.user.data
    }
}

export default connect (mapStateToProps, 0)(Navbar);