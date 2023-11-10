import { getTrendingMovies } from 'api/api'
import MoviesList from 'components/MoviesList/MoviesList'
import {React, useEffect, useState} from 'react'

export default function Home() {
    const [trendingMovies, setTrendingMovies] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        async function getMovies() {
            try{
                    const data = await getTrendingMovies()
                    setTrendingMovies(data.results)
                  }catch (error){
                    setError(true)
                  }        
          }
          getMovies();
    }, [])
  return (
    <>
    
    <h2>Trending today</h2>
    {trendingMovies.length !== 0 && 
    <ul>
       {trendingMovies.map(m => <MoviesList key={m.id} m={m}/>
       )}
    </ul>
    }
    {error && <p>Ooops something went wrong!</p>}
    </>
  )
}
