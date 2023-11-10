import { getMovieById } from "api/api";
import { BackLink } from "components/BackLink/BackLink";
import { useRef } from "react";
import { Suspense, useEffect, useState } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)
    const location = useLocation();
    const [error, setError] = useState(null)
    const backLinkRef = useRef(location.state?.from ?? "/")
    useEffect(() => {
        async function getMovies() {
            try{
                    const data = await getMovieById(movieId)
                    setMovie(data)
                  }catch (error){
                    setError(true)
                  }        
          }
          getMovies();
    }, [movieId])

  return (<>
  <BackLink to={backLinkRef.current}>Back to products</BackLink>
  {error && <p>Ooops something went wrong!</p>}
    {movie && <div>
        <img width='250px' height='350px' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
        <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres.map(obj => <span key={obj.id}>{obj.name}</span>)}</p>
        </div>
        <div>
            <Link to={'cast'}>Cast</Link>
            <Link to={'reviews'}>Reviews</Link>
        </div>
    </div>}
    <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
