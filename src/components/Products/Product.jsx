import { useContext } from 'react';
import { ShopContext } from '../../context/shopContext';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Product = ({ productId, productBrand, productName, productImage, productPrice }) => {
  const { addToCart, getFinalPrice } = useContext(ShopContext);

  const notify = () =>
    toast.success(`${productName} added in to cart!`, {
      duration: 3000,
      style: {
        backgroundColor: 'rgb(20, 20, 22)',
        color: 'rgb(245, 245, 245)',
        border: '1px solid rgb(107, 114, 128)',
      },
    });

  return (
    <>
      <Toaster />
      <div className='product'>
        <Link to={`/products/${productId}`}>
          <img className='product-image' src={productImage} />
          <div className='w-[90%] mx-auto'>
            <div className='flex justify-between mt-2 font-semibold'>
              <h1>{productName}</h1>
              <h1>{productPrice}$</h1>
            </div>

            <h1 className='text-zinc-500'>{productBrand}</h1>
          </div>
        </Link>
        <div className='flex justify-center'>
          <button
            onClick={() => {
              addToCart(productId);
              getFinalPrice();
              notify();
            }}
            className='w-[90%] border-[1px] rounded-2xl mt-2 py-1 hover:font-semibold hover:bg-white duration-150 hover:text-black'>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
