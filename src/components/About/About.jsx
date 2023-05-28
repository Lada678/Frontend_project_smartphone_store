import samsungZfold4 from '../../assets/products/samsungZfold4.jpg';
import samsungS23 from '../../assets/products/samsungS23.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='max-w-7xl px-2 m-auto mb-10 pt-20'>
        <div className='flex flex-col md:flex-row md:pt-20 md:justify-center items-center'>
          <img src={samsungZfold4} className='w-1/2 max-h-[500px] object-contain' />
          <div className='text-center md:text-left px-10'>
            <h1 className='text-3xl md:w-2/3'>Who we are</h1>
            <p className='md:w-4/5 mb-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum eum non voluptatum porro corrupti minima, delectus adipisci accusantium eos! Minima placeat debitis a rem quidem laborum dicta fugiat mollitia voluptatem?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit veritatis deserunt quam fugiat, deleniti impedit voluptatibus rerum atque aperiam, officia commodi pariatur cumque nisi repellat similique corporis. Temporibus, harum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus consectetur sequi inventore perspiciatis necessitatibus odit molestias. Accusantium molestias itaque consequuntur sequi. Itaque quasi eius quibusdam! Excepturi fuga nostrum labore sit.
            </p>
            <Link
              className='border-2 mt-5 rounded-md border-[#48dc8c] px-5 py-2 hover:border-[#009c49] duration-300'
              to={'/products'}>
              PRODUCTS
            </Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row pt-20 px-10 md:pt-0 md:justify-center items-center'>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl md:w-2/3'>Our products</h1>
            <p className='md:w-4/5 mb-5'>
              Our products come directly from the factories of your favourite brand
            </p>
          </div>
          <img src={samsungS23} className='w-1/2 max-h-[500px] object-contain' />
        </div>
      </div>
    </>
  );
};

export default About;
