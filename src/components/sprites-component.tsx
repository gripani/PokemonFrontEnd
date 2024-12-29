import React from 'react'

import type { IPokemonSprites } from '../interfaces/pokemon/Pokemon'

interface IProps {
  sprites: IPokemonSprites
}

function SpritesComponent (props: IProps): React.JSX.Element {
  return <div>
    <h3><b>default sprites</b></h3>

    <div className="row">
      <div className="col">
        <h4>front</h4>
        <img
          src={props.sprites.front_default}
          alt="front-default"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back</h4>
        <img
          src={props.sprites.back_default}
          alt="front-default"
          width="144px"
        />
      </div>
    </div>

    <br />

    <div className="row">
      <div className="col">
        <h4>front shiny</h4>
        <img
          src={props.sprites.front_shiny}
          alt="front-default"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back shiny</h4>
        <img
          src={props.sprites.back_shiny}
          alt="front-default"
          width="144px"
        />
      </div>
    </div>

    <hr className="hr" />

    <h3><b>red-blue</b></h3>

    <div className="row">
      <div className="col">
        <h4>front</h4>
        <img
          src={props.sprites.versions['generation-i']['red-blue'].front_default ?? '#'}
          alt="front-red-blue"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back</h4>
        <img
          src={props.sprites.versions['generation-i']['red-blue'].back_default ?? '#'}
          alt="back-red-blue"
          width="144px"
        />
      </div>
    </div>

    <br />

    <div className="row">
      <div className="col">
        <h4>front gray</h4>
        <img
          src={props.sprites.versions['generation-i']['red-blue'].front_gray ?? '#'}
          alt="front-red-blue-gray"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back gray</h4>
        <img
          src={props.sprites.versions['generation-i']['red-blue'].back_gray ?? '#'}
          alt="back-red-blue-gray"
          width="144px"
        />
      </div>
    </div>

    <hr className="hr" />

    <h3><b>gold-silver</b></h3>

    <div className="row">
      <div className="col">
        <h4>front</h4>
        <img
          src={props.sprites.versions['generation-ii'].gold.front_default ?? '#'}
          alt="front-gold"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back</h4>
        <img
          src={props.sprites.versions['generation-ii'].gold.back_default ?? '#'}
          alt="back-gold"
          width="144px"
        />
      </div>
    </div>

    <br />

    <div className="row">
      <div className="col">
        <h4>front shiny</h4>
        <img
          src={props.sprites.versions['generation-ii'].gold.front_shiny ?? '#'}
          alt="front-gold-shiny"
          width="144px"
        />
      </div>
      <div className="col">
        <h4>back shiny</h4>
        <img
          src={props.sprites.versions['generation-ii'].gold.back_shiny ?? '#'}
          alt="back-gold-shiny"
          width="144px"
        />
      </div>
    </div>
  </div>
}

export default SpritesComponent
