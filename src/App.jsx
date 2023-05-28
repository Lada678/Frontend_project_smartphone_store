import { Link } from 'react-router-dom';
import productImage from './assets/android-device.jpg';

function App() {
  return (
    <>
      <div className='max-w-7xl px-2 m-auto h-[calc(100vh-90px)] flex flex-col md:flex-row pt-20 md:pt-0 md:justify-center items-center'>
        <img src={productImage} className='w-1/2 max-h-[500px] object-contain' />
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:w-2/3'>Premium Products</h1>
          <p className='md:w-4/5 mb-5'>
            Check out our Products with amazing performance and beautiful desing. On our website you
            can mainly find devices which you can buy for the best prices!
          </p>
          <Link
            className='border-2 mt-5 rounded-md border-[#48dc8c] px-5 py-2 hover:border-[#009c49] duration-300'
            to={'/products'}>
            PRODUCTS
          </Link>
        </div>
      </div>
      <h1 className='text-center mb-2'>Made by Lada</h1>
    </>
  );
}

export default App;
