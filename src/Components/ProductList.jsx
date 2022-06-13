import React from 'react';
import ProductItem from './ProductItem';


function ProductList(props) {
    const {products} = props;

    return (
        <div className="row my-4">
            {
              products
                ? products.map ((product) => {
                      return (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            currency={product.currency}
                            image={product.image}
                        />
                      )  
                  })
                : null
            }
          </div>
    );
}

export default ProductList;
