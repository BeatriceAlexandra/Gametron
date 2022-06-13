import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../dataSlider';
import NewProduct from './NewProduct';

const Container =styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const NewProducts = () => {
  return (
 
    <Container> 
        {popularProducts.map((item) => (
            <NewProduct item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default NewProducts;
