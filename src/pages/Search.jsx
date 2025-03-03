import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch,useTitle } from '../Hooks';
import { MovieCard } from "./MovieCard";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm =searchParams.get('q');
  const { data: movies } = useFetch(apiPath,queryTerm);
   
  useTitle(`Search result for ${queryTerm}`)

  return (
    <main>
      <section className="py-7 px-4">
        <p className="text-3xl text-gray-900 dark:text-white">{movies.length === 0 ? `No results found for '${queryTerm}'` : `Results found for '${queryTerm}'`}</p>
      </section>
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
  )
}


