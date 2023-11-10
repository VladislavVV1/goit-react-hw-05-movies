import { getSearchedMovies } from 'api/api'
import MoviesList from 'components/MoviesList/MoviesList'
import { SearchBar } from 'components/SearchBar/SearchBar'
import React from 'react'
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Movies() {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const searchValue = searchParams.get("name") ?? "";

    const onSubmit = (value) => {
        updateQueryString(value)
        setMovies([])
      } 

      useEffect(() => {
        if (searchValue === '') {
            return;
          }
        async function getMovies() {
            try{
                    const data = await getSearchedMovies(searchValue)
                    setMovies(data.results)
                  }catch (error){
                    setError(true)
                  }        
          }
          getMovies();
    }, [searchValue])
        
    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
      };
  return (
    <>
    <SearchBar
     onSubmit={onSubmit}/>
    {movies.length !== 0 && 
        <ul>
           {movies.map(m => <MoviesList key={m.id} m={m}/>
           )}
        </ul>
        }
    {error && <p>Ooops something went wrong!</p>}
    </>
  )
}
