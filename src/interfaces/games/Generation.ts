import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IGeneration {
  id: number
  name: string
  abilities: INamedApiResource[]
  names: IName[]
  main_region: INamedApiResource
  moves: INamedApiResource[]
  pokemon_species: INamedApiResource[]
  types: INamedApiResource[]
  version_groups: INamedApiResource[]
}
