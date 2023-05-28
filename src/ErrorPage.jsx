import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <div className='w-full h-screen text-center flex items-center justify-center'>
        <h1>{error.status}</h1>
        <div className='w-[1px] h-8 mx-2 bg-white'></div>
        <h1>{error.statusText || error.message}</h1>
      </div>
    </>
  );
};

export default ErrorPage;
