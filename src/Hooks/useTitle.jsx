import React from 'react'

export const useTitle = (title) => {
   
   React.useEffect(() => {

    document.title = `${title} / Cinemate`;

   })



  return null;
}

 
