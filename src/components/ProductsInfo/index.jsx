import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext'
import toast, { Toaster } from 'react-hot-toast'

const ProductsInfo = () => {
  const { addToCart, getFinalPrice } = useContext(ShopContext);
  const { id } = useParams()
  const product = PRODUCTS ? PRODUCTS.find(product => product.id == id) : {}

  const { productBrand, productName, productImage, productPrice, description } = product;

  const notify = () =>
    toast.success(`${productName} added in to cart!`, {
      duration: 3000,
      style: {
        backgroundColor: 'rgb(20, 20, 22)',
        color: 'rgb(245, 245, 245)',
        border: '1px solid rgb(107, 114, 128)',
      },
    });

  if (product === undefined) {
    return (
      <div className='max-w-7xl w-11/12 md:w-4/5 mx-auto'>
        <h1 className='text-2xl font-semibold text-center'>Product not found!</h1>
      </div>
    )
  }

  return (
    <div className='max-w-7xl w-11/12 md:w-4/5 mx-auto mt-20'>
    <Toaster />
      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className='flex flex-col items-center'>
          <img src={product?.productImage} alt={product?.productName} className='w-80 h-80 object-contain' />
          <h1 className='text-2xl font-semibold'>{product?.productName}</h1>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold'>{product?.productBrand}</h1>
          <p className='text-md max-w-md'>{product?.description}</p>
          <p className='text-xl'>Price: {product?.productPrice}$</p>
          <button
            className='border-2 rounded-md border-[#48dc8c] px-5 py-2 hover:border-[#009c49] duration-300'
            onClick={() => {
              addToCart(id);
              getFinalPrice();
              notify();
            }}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsInfo
