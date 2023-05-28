import { useContext, useState } from 'react';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import { ShopContext } from '../../context/shopContext';

const CartProduct = (props) => {
  const { id, productBrand, productName, productImage, productPrice } = props.product;
  const { cartItems, removeFromCart, setNumberOfItems, getFinalPrice } = useContext(ShopContext);

  const [numOfProduct, setNumOfProduct] = useState(cartItems[id]);

  return (
    <>
      <div
        className='w-full grid gap-2 border-b-[1px] pb-2 mb-2 border-gray-500'
        style={{ gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 1fr 1fr' }}>
        <div className='flex justify-center items-center'>
          <img src={productImage} />
        </div>
        <p className='flex justify-center items-center'>
          {productBrand} {productName}
        </p>
        <p className='flex justify-center items-center'>{productPrice}$</p>
        <div className='flex justify-center items-center'>
          <IoMdRemove
            className='cursor-pointer p-2 select-none'
            size={30}
            onClick={() => {
              if (cartItems[id] > 1) {
                cartItems[id] -= 1;
                setNumberOfItems((prev) => prev - 1);
                setNumOfProduct(cartItems[id]);
                getFinalPrice();
              }
            }}
          />
        </div>
        <p className='flex justify-center items-center'>{numOfProduct}</p>
        <div className='flex justify-center items-center'>
          <IoMdAdd
            className='cursor-pointer p-2 select-none'
            color='white'
            size={30}
            onClick={() => {
              cartItems[id] += 1;
              setNumberOfItems((prev) => prev + 1);
              setNumOfProduct(cartItems[id]);
              getFinalPrice();
            }}
          />
        </div>
        <div className='flex justify-center items-center'>
          <IoMdClose
            onClick={() => {
              removeFromCart(id);
            }}
            size={30}
            className='select-none cursor-pointer bg-red-500 duration-150 hover:bg-red-600 rounded-full p-1'
          />
        </div>
      </div>
    </>
  );
};

export default CartProduct;
