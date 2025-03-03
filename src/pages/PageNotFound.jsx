import React from 'react'
import PageNotFoundImage from '../assets/pagenotfound.png'
import { Link } from 'react-router-dom'
import { useTitle } from '../Hooks/useTitle';


export const PageNotFound = () => {

  useTitle(`Page Not Found`);
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center justify-center my-4">
          <p className="font-bold text-gray-900 dark:text-white text-4xl my-10">404, Oops!</p>
          <div className="max-w-sm">
            <img className="rounded" src={PageNotFoundImage} alt="404, Oops Page Not Found" />
          </div>
        </div>
        <div className='my-8 flex justify-center  '>
          <Link to="/">
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go Back to Cinemate..!</button>
          </Link>
        </div>
      </section>
    </main>
  )
}


