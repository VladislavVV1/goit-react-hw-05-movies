import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container, Header, Link } from './SharedLayout.styled'

export const SharedLayout = () => {
  return (
    <Container>
        <Header>
            <nav>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  )
}
