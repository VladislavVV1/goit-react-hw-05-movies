import { getMovieDetails } from 'api/api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Cast() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getMovies() {
            try{
                    const data = await getMovieDetails(movieId, 'credits')
                    setMovie(data.cast)
                  }catch (error){
                    setError(true)
                  }        
          }
          getMovies();
    }, [movieId])
  return (<>
  {error && <p>Ooops something went wrong!</p>}
    {movie && <div>
        {movie.map((c) => <div key={c.id}>
            <img width='100px' height='150px' src={`https://image.tmdb.org/t/p/original${c.profile_path}`} alt="" />
            <p>{c.original_name}</p>
            <p>Character: {c.character}</p>
        </div>)}

    </div>}
    </>
  )
}
