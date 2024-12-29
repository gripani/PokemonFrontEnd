import React from 'react'

import PokemonComponent from './views/pokemon-component'

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import NavBarComponent from './components/navbar-component'

import PokemonSpeciesComponent from './views/pokemon-species-component'
import LocationAreaEncounterComponent from './views/location-area-encounter-component'
import PokemonListComponent from './views/pokemon-list-component'
import HomeComponent from './views/home-component'

function WithNavbar (): React.JSX.Element {
  return (
    <div>
      <NavBarComponent />
      <Outlet />
    </div>
  )
}

export default function App (): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route element={<WithNavbar />}>
          <Route path="" element={<HomeComponent />} />
          <Route path="generation/:generationName" element={<PokemonListComponent />} />
          <Route path="pokemon/:pokemonName" element={<PokemonComponent />} />
          <Route path="location-area-encounter/:pokemonId" element={<LocationAreaEncounterComponent />} />
          <Route path="pokemon-species/:pokemonName" element={<PokemonSpeciesComponent />} />
        </Route>
      </Routes>
    </Router>
  )
}
