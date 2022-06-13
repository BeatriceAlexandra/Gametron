import React from 'react';
import styled from 'styled-components';
import { categories } from '../dataSlider';
import PromoCategoryItem from './PromoCategoryItem';

const Container = styled.div`
    display:flex;
    padding: 20px;
    justify-content: space-between;    
`;

const PromoCategories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <PromoCategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default PromoCategories;
