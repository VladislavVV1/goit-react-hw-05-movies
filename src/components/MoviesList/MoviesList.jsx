import React from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function MoviesList({m}) {
    const location = useLocation();
  return (
    <li>
       <Link to={`/movies/${m.id}`} state={{ from: location }}>{m.title}</Link>
    </li>
  )
}
