import React, { useEffect, useState } from 'react'

import RegexUtils from '../utils/regex-utils'
import type { IPokemonMove } from '../interfaces/pokemon/Pokemon'
import { MOVES_TYPES_SRC_MAP } from '../utils/constants'
import type { MovesData } from '../interfaces/internal/moves'
import MoveTypeService from '../services/move-type-service'
import type { IError } from '../interfaces/errors/Error'
import LoadingSpinnerComponent from './loading-component'

function PokemonMovesComponent (props: { moves: IPokemonMove[] }): React.JSX.Element {

  const { moves } = props

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [movesData, setMovesData] = useState<MovesData[] | null>(null)

  const getMoveSourceByName = (name: string): string | undefined => {
    return movesData?.filter(moveData => moveData.name === name)
      .map(moveData => MOVES_TYPES_SRC_MAP[moveData.type])
      .at(0)
  }

  useEffect(() => {
    const moveTypeService = new MoveTypeService()
    moveTypeService.getMoves()
      .then(
        (data: MovesData[]) => {
          setMovesData(data)
          setLoading(false)
        },
        (err: IError) => {
          setError(true)
          setLoading(false)
          alert(err.message)
        }
      )
  }, [])

  if (loading) {
    return <LoadingSpinnerComponent />
  }

  if (error) {
    return <h2>Error.</h2>
  }

  if (setMovesData !== null) {
    return <table className='table table-hover'>
      <thead>
        <tr key='0'>
          <th scope='col'>#</th>
          <th scope='col'>name</th>
          <th scope='col'>type</th>
        </tr>
      </thead>

      <tbody>
        {moves.map(move => (
          <tr key={move.move.name}>
            <td>{move.move.url.match(RegexUtils.moveNumberMatcher)?.at(1)}</td>
            <td>{move.move.name}</td>
            <td>
              <img
                src={getMoveSourceByName(move.move.name) ?? '#'}
                alt={move.move.name} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  }

  return <></>
}

export default PokemonMovesComponent
