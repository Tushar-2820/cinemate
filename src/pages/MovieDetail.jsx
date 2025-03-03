import React from 'react'
import { useFetch,useTitle } from '../Hooks';
import { useParams } from 'react-router-dom';
import BackupImage from '../assets/backup.png'


export const MovieDetail = ({ apiPath }) => {



  const params = useParams();
  const { data: movieDetail } = useFetch(`${apiPath}${params.id}`, "", true);
  const image = movieDetail.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}` : BackupImage;
  
  useTitle(movieDetail.title);

  return (
    <main>
      <section className='flex flex-wrap justify-around py-5 mt-4'>
        <div className='max-w-sm'>
          <img className='rounded-lg' src={image} alt={movieDetail.title} />
        </div>
        <div className='max-w-2xl text-gray-900 dark:text-white '>
          <h2 className='text-4xl font-bold my-3 text-center lg:text-left'>{movieDetail.title}</h2>
          <p className='my-4'>{movieDetail.overview}</p>

          {movieDetail?.genres && (
            <p className="my-7 flex flex-wrap gap-2">
              {movieDetail.genres.map((genre) => (
                <span key={genre.id} className="mr-2 border border-gray-600 rounded p-2 text-gray-900 dark:text-white">
                  {genre.name}
                </span>
              ))}
            </p>
          )}




          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2  font-bold text-gray-900 dark:text-white">{movieDetail.vote_average}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span>{`${movieDetail.vote_count} reviews`}</span>
          </div>

          <p className='my-4 text-gray-900 dark:text-white'><span className='font-bold'>Runtime:</span> {`${movieDetail.runtime} min.`}</p>
          <p className='my-4 text-gray-900 dark:text-white'><span className='font-bold'>Budget:</span> {movieDetail.budget}</p>
          <p className='my-4 text-gray-900 dark:text-white'><span className='font-bold'>Revenue:</span> {movieDetail.revenue}</p>
          <p className='my-4 text-gray-900 dark:text-white'><span className='font-bold'>Release Date:</span> {movieDetail.release_date}</p>
          <p className='my-4 text-gray-900 dark:text-white'><span className='font-bold'>IMDB Code:</span> <a href={`https://imdb.com/title/${movieDetail.imdb_id}`} target="_blank" rel='noreferrer'>{movieDetail.imdb_id}</a></p>







        </div>
      </section>
    </main>
  )
}


