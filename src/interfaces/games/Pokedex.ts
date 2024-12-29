import type { IDescription, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPokedex {
  id: number
  name: string
  is_main_series: boolean
  descriptions: IDescription[]
  names: IName[]
  pokemon_entries: IPokemonEntry[]
  region: INamedApiResource
  version_groups: INamedApiResource[]
}

export interface IPokemonEntry {
  entry_number: number
  pokemon_species: INamedApiResource
}
