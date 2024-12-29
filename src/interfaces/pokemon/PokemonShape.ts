import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPokemonShape {
  readonly id: number
  readonly name: string
  readonly awesome_names: IAwesomeName[]
  readonly names: IName[]
  readonly pokemons_species: INamedApiResource[]
}

export interface IAwesomeName {
  readonly awesome_name: string
  readonly language: INamedApiResource
}
