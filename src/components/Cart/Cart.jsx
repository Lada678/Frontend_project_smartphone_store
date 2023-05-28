import { useContext, useEffect } from 'react';
import { ShopContext } from '../../context/shopContext';
import { PRODUCTS } from '../../products';
import CartProduct from './CartProduct';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, numberOfItems, finalPrice, getFinalPrice } = useContext(ShopContext);

  useEffect(() => {
    getFinalPrice();
  }, [finalPrice, numberOfItems]);

  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-4xl text-center my-14 font-semibold'>Cart</h1>
      {numberOfItems === 0 ? (
        <h1 className='text-xl text-center'>{'Your cart is empty :('}</h1>
      ) : (
        <div className='max-w-7xl w-11/12 md:w-4/5 mx-auto'>
          {PRODUCTS.map((product, key) => {
            if (cartItems[product.id] > 0) {
              return <CartProduct key={key} product={product} />;
            }
          })}
          <div className='flex items-center justify-between mt-4'>
            <p>Total : {finalPrice}$</p>
            <button
              className='border-2 rounded-md border-[#48dc8c] px-5 py-2 hover:border-[#009c49] duration-300'
              onClick={() => {
                navigate('/checkout');
              }}>
              CONTINUE
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
