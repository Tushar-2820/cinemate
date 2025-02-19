
import React from 'react'

export const useFetch = (apiPath, queryTerm = "", movieDetail = false) => {
 
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1&query=${queryTerm}`;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {

    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();
      //  setData(result.results);

      movieDetail ? setData(result) : setData(result.results);
       
    }

    fetchData();

  }, [url]);

  return { data };
}


