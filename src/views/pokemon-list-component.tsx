import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { IPaginated } from '../interfaces/utils/Paginated'
import type { IError } from '../interfaces/errors/Error'
import PaginatedService from '../services/paginated-service'
import RegexUtils from '../utils/regex-utils'
import type { IconsData } from '../interfaces/internal/icons'
import IconService from '../services/icon-service'
import LoadingSpinnerComponent from '../components/loading-component'

function PokemonListComponent (): React.JSX.Element {
  const { generationName } = useParams<{ generationName: string }>()

  const [errors1, setErrors1] = useState<boolean>(false)
  const [errors2, setErrors2] = useState<boolean>(false)
  const [loading1, setLoading1] = useState<boolean>(true)
  const [loading2, setLoading2] = useState<boolean>(true)

  const [paginatedPokemon, setPaginatedPokemon] = useState<IPaginated | null>(null)
  const [iconsData, setIconsData] = useState<IconsData[] | null>(null)

  const getUppercaseGenerationName = (name: string): string => {
    try {
      const firstPart: string = name.split('-')[0]
      const secondPart: string = name.split('-')[1]
      const upperCaseFirstPart: string = firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
      return upperCaseFirstPart + ' ' + secondPart.toUpperCase()
    } catch (e) {
      const errorMessage = (e as Error).message
      console.log(errorMessage)
      return ''
    }

  }

  const getIconSrcByName = (name: string): string | undefined => {
    if (iconsData === null) {
      return '#'
    }
    const srcData = iconsData?.filter(iconData => iconData.name === name)
      .map(iconData => iconData.src)
    if (srcData === null || srcData.length === 0) {
      return '#'
    }
    return srcData.at(0)
  }

  useEffect(() => {
    const paginatedService = new PaginatedService()
    paginatedService.getManyByGeneration(generationName ?? '')
      .then(
        (data: IPaginated) => {
          setPaginatedPokemon(data)
          setLoading1(false)
        },
        (err: IError) => {
          setErrors1(true)
          setLoading1(false)
          alert(err.message)
        }
      )

    const iconService = new IconService()
    iconService.getManyByGeneration(generationName ?? '')
      .then(
        (data: IconsData[]) => {
          setIconsData(data)
          setLoading2(false)
        },
        (err: IError) => {
          setErrors2(true)
          setLoading2(false)
          alert(err.message)
        }
      )
  }, [generationName])

  if (loading1 && loading2) {
    return <LoadingSpinnerComponent />
  }
  if (errors1 || errors2) {
    return <h6>Error</h6>
  }

  if (paginatedPokemon !== null && iconsData !== null) {
    return (
      <div className='container'>
        <h1>{getUppercaseGenerationName(generationName ?? '')}</h1>
        <h4>found {paginatedPokemon.results.length} total pokèmon</h4>
        <table className='table table-hover'>
          <thead>
            <tr key='0'>
              <th scope='col'>#</th>
              <th scope='col'>icon</th>
              <th scope='col'>name</th>
              <th scope='col'>detail</th>
            </tr>
          </thead>

          <tbody>
            {paginatedPokemon.results.map((pokemon, i) => {
              return (
                <tr key={i}>
                  <td>{pokemon.url.match(RegexUtils.pokemonNumberMatcher)?.at(1)}</td>
                  <td>
                    <img
                      src={getIconSrcByName(pokemon.name) ?? '#'}
                      alt={pokemon.name} />
                  </td>
                  <td>{pokemon.name}</td>
                  <td>
                    <button className='btn btn-primary'
                      type='button'
                      onClick={() => window.open('/pokemon/' + pokemon.name)}
                    >
                      info
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  return <></>
}

export default PokemonListComponent
