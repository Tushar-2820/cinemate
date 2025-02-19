import React from "react";
import { useFetch,useTitle } from '../Hooks';
import { MovieCard } from "./MovieCard";


export const MovieList = ({ apiPath,title }) => {
   
  useTitle(title);


  const { data: movies } = useFetch(apiPath);


  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-evenly">
          {
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }

        </div>
      </section>
    </main>
  );
};
