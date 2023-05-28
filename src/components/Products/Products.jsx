import { useContext } from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
import './products.css';
import { ShopContext } from '../../context/shopContext';

const Products = () => {
  const { numberOfItems } = useContext(ShopContext);

  return (
    <div className='mb-20'>
      <h1 className='text-4xl text-center my-14 font-semibold'>Our Products</h1>
      <div className='products'>
        {PRODUCTS.map((product, key) => (
          <Product
            productId={product.id}
            productBrand={product.productBrand}
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
