import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { IPokemonSpecies } from '../interfaces/pokemon/PokemonSpecies'
import type { IError } from '../interfaces/errors/Error'
import PokemonSpeciesService from '../services/pokemon-species-service'
import LoadingSpinnerComponent from '../components/loading-component'

function PokemonSpeciesComponent (): React.JSX.Element {
  const { pokemonName } = useParams<{ pokemonName: string }>()

  const [errors, setErrors] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [pokemonSpecies, setPokemonSpecies] = useState<IPokemonSpecies | null>(null)

  useEffect(() => {
    const pokemonSpeciesService = new PokemonSpeciesService()
    pokemonSpeciesService.getPokemonSpecies(pokemonName ?? '')
      .then(
        (data: IPokemonSpecies) => {
          setPokemonSpecies(data)
          setLoading(false)
        },
        (err: IError) => {
          setErrors(true)
          setLoading(false)
          alert(err.message)
        }
      )
  }, [pokemonName])

  if (loading) {
    return <LoadingSpinnerComponent />
  }
  if (errors) {
    return <h6>error</h6>
  }
  if (pokemonSpecies !== null) {
    return (
      <div className="container">
        <h1>Pokèmon Species</h1>

        <div className="row">
          <div className="col-md-12">
            <h2>Name: {pokemonName}</h2>
          </div>
        </div>

        <div className="container border border-info rounded mt-2 pt-2 pb-2">
          <div className="row">
            <div className="col">
              <b>gender rate:</b> {pokemonSpecies.gender_rate}
              <br />
              <b>capture rate:</b> {pokemonSpecies.capture_rate}
              <br />
              <b>base happiness:</b> {pokemonSpecies.base_happiness}
            </div>

            <div className="col">
              <b>baby:</b> <input disabled type="checkbox" checked={pokemonSpecies.is_baby} />
              <br />
              <b>hatch counter:</b> {pokemonSpecies.hatch_counter}
              <br />
              <b>gender differences:</b> <input disabled type="checkbox" checked={pokemonSpecies.has_gender_differences} />
            </div>
          </div>
        </div>

        <br />

        <div className='container border border-info rounded mt-2 pt-2 pb-2'>
          {pokemonSpecies.flavor_text_entries.map((flavorText, i) => {
            if (flavorText.language.name === 'en') {
              return (
                <div key={i} className=''>
                  <b>flavor text: </b> {flavorText.flavor_text}
                  <br />
                  <b>version: {flavorText.version.name}</b>
                  <br />
                  <br />
                </div>
              )
            }
            return <></>
          })}
          {pokemonSpecies.genera.map((genus, i) => {
            if (genus.language.name === 'en') {
              return (
                <div key={i} className="">
                  <b>genus:</b> {genus.genus}
                </div>
              )
            }
            return <></>
          })}
        </div>
      </div >
    )
  }
  return <></>
}

export default PokemonSpeciesComponent
