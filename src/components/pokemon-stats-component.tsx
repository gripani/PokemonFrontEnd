import React from 'react'

import type { IPokemonStat } from '../interfaces/pokemon/Pokemon'

function PokemonStatsComponent (props: { stats: IPokemonStat[] }): React.JSX.Element {

  const { stats } = props

  return (
    <div className='row'>
      <div className='col'>
        <b>hp:</b> {stats.filter((stat) => stat.stat.name === 'hp')[0].base_stat}
        <br />
        <b>attack:</b> {stats.filter((stat) => stat.stat.name === 'attack')[0]?.base_stat}
        <br />
        <b>defense:</b> {stats.filter((stat) => stat.stat.name === 'defense')[0]?.base_stat}
      </div>
      <div className='col'>
        <b>special attack:</b> {stats.filter((stat) => stat.stat.name === 'special-attack')[0].base_stat}
        <br />
        <b>special defense:</b> {stats.filter((stat) => stat.stat.name === 'special-defense')[0].base_stat}
        <br />
        <b>speed:</b> {stats.filter((stat) => stat.stat.name === 'speed')[0].base_stat}
      </div>
    </div>
  )

}

export default PokemonStatsComponent
