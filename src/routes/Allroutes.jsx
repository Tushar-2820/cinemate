import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { MovieDetail,MovieList,PageNotFound,Search } from '../pages';

export const Allroutes = () => {
  return (
    <div className='dark:bg-slate-800'>
    <Routes>
        <Route path="/"  element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="movie/popular"  element={<MovieList apiPath="movie/popular" title="Popular " />} />
        <Route path="movie/top"  element={<MovieList apiPath="movie/top_rated" title="Top-Rated" />} />
        <Route path="movie/upcoming"  element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="movie/:id"  element={<MovieDetail apiPath="movie/" />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound title="PageNotFound" />} />
    </Routes>
    </div>
  )
}


