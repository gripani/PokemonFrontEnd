import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IRegion {
  id: number
  locations: INamedApiResource[]
  name: string
  names: IName[]
  main_generation: INamedApiResource
  pokedexes: INamedApiResource[]
  version_groups: INamedApiResource[]
}
