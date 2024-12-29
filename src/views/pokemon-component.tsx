import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { IPokemon } from '../interfaces/pokemon/Pokemon'
import type { IError } from '../interfaces/errors/Error'
import PokemonService from '../services/pokemon-service'
import RegexUtils from '../utils/regex-utils'

import SpritesComponent from '../components/sprites-component'
import PokemonMovesComponent from '../components/pokemon-moves-component'
import LoadingSpinnerComponent from '../components/loading-component'
import PokemonStatsComponent from '../components/pokemon-stats-component'

function PokemonComponent (): React.JSX.Element {
  const { pokemonName } = useParams<{ pokemonName: string }>()

  const [errors, setErrors] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const getSecondAbility = (): string => {
    if (pokemon !== null) {
      return pokemon.abilities.length > 1 ? ', ' + pokemon.abilities[1].ability.name : ''
    }
    return ''
  }

  const getSecondType = (): string => {
    if (pokemon !== null) {
      return pokemon.types.length > 1 ? ', ' + pokemon.types[1].type.name : ''
    }
    return ''
  }



  useEffect(() => {
    const pokemonService = new PokemonService()
    pokemonService.getPokemon(pokemonName ?? '')
      .then(
        (data: IPokemon) => {
          setPokemon(data)
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
  if (pokemon !== null) {
    return (
      <div className="container">
        <h1>Pokèmon</h1>
        <h2>Name: {pokemon.name}</h2>
        <div className="container border border-info rounded mt-3">

          <div className="row">

            <div className="col">

              <img
                src={pokemon.sprites.front_default}
                alt="front-default"
                width="144px"
              />

            </div>

            <div className="col">

              <b>id:</b> {pokemon.id}
              <br />
              <b>abilities:</b> {pokemon.abilities[0].ability.name}{getSecondAbility()}
              <br />
              <b>base exp:</b> {pokemon.base_experience}
            </div>

            <div className="col">
              <b>height:</b> {pokemon.height * 10.0} cm
              <br />
              <b>weight:</b> {pokemon.weight / 10.0} kg
              <br />
              <b>types:</b>  {pokemon.types[0].type.name}{getSecondType()}
            </div>

          </div>

        </div>

        <div className='container border border-info rounded mt-3'>
          <PokemonStatsComponent stats={pokemon.stats} />
        </div>

        <div className='row'>
          <div className='col'>
            <button className='btn btn-info mt-3'
              onClick={() => window.open(`/location-area-encounter/${pokemon.location_area_encounters.match(RegexUtils.locationAreaEncounterMatcher)?.at(1)}`)}
            >
              Encounters
            </button>
          </div>
          <div className='col'>
            <button className='btn btn-info mt-3'
              onClick={() => window.open('/pokemon-species/' + pokemon.species.name + '?version=gold')}>
              Species
            </button>
          </div>
        </div>

        <br />

        <div className="accordion border border-info rounded" id="accordionSprites">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSprites">
              <button className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSprites"
                aria-expanded="true"
                aria-controls="collapseSprites">
                Sprites
              </button>
            </h2>
            <div className="accordion-collapse collapse show"
              id="collapseSprites"
              aria-labelledby="headingSprites"
              data-bs-parent="#accordionSprites">
              <div className="accordion-body">
                <SpritesComponent sprites={pokemon.sprites} />
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="accordion border border-info rounded" id="accordionMoves">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingMoves">
              <button className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseMoves"
                aria-expanded="true"
                aria-controls="collapseMoves">
                Moves
              </button>
            </h2>
            <div className="accordion-collapse collapse show"
              id="collapseMoves"
              aria-labelledby="headingMoves"
              data-bs-parent="#accordionMoves">
              <div className="accordion-body">
                <PokemonMovesComponent moves={pokemon.moves} />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  return <></>
}

export default PokemonComponent
