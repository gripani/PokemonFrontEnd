import type { IGenerationGameIndex, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IType {
  id: number
  name: string
  damage_relations: ITypeRelations
  game_indices: IGenerationGameIndex
  generation: INamedApiResource
  move_damage_class: INamedApiResource
  names: IName[]
  pokemon: ITypePokemon
  moves: INamedApiResource
}

export interface ITypePokemon {
  slot: number
  pokemon: INamedApiResource
}

export interface ITypeRelations {
  no_damage_to: INamedApiResource[]
  half_damage_to: INamedApiResource[]
  double_damage_to: INamedApiResource[]
  no_damage_from: INamedApiResource[]
  half_damage_from: INamedApiResource[]
  double_damage_from: INamedApiResource[]
}
