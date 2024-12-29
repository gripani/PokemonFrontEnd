import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPalParkArea {
  id: number
  name: string
  names: IName[]
  pokemon_encounters: IPalParkEncounterSpecies[]
}

export interface IPalParkEncounterSpecies {
  base_source: number
  rate: number
  pokemon_species: INamedApiResource
}
