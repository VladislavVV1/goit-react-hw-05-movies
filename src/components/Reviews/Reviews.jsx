import { getMovieDetails } from 'api/api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Reviews() {
    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getMovies() {
            try{
                    const data = await getMovieDetails(movieId, 'reviews')
                    setMovie(data.results)
                  }catch (error){
                    setError(true)
                  }        
          }
          getMovies();
    }, [movieId])
  return (<>
  {error && <p>Ooops something went wrong!</p>}
    {movie.length !== 0 && <ul>
        {movie.map((r) => <li key={r.id}>
            <h4>Author: {r.author}</h4>
            <p>{r.content}</p>
        </li>)}
    </ul>}
    {movie.length === 0 && <p>We don't have any reviews for this movie.</p>}
    </>
  )
}
