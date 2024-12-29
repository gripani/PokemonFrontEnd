import type { IDescription, IFlavorText, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPokemonSpecies {
  readonly id: number
  readonly name: string
  readonly order: number
  readonly gender_rate: number
  readonly capture_rate: number
  readonly base_happiness: number
  readonly is_baby: boolean
  readonly hatch_counter: number
  readonly has_gender_differences: boolean
  readonly forms_switchable: boolean
  readonly growth_rate: INamedApiResource
  readonly pokedex_numbers: IPokemonSpeciesDexEntry[]
  readonly egg_groups: INamedApiResource[]
  readonly color: INamedApiResource
  readonly shape: INamedApiResource
  readonly evolves_from_species: INamedApiResource
  readonly evolution_chain: INamedApiResource
  readonly habitat: INamedApiResource
  readonly generation: INamedApiResource
  readonly names: IName[]
  readonly pal_park_encounters: IPalParkEncounterArea[]
  readonly flavor_text_entries: IFlavorText[]
  readonly form_descriptions: IDescription[]
  readonly genera: IGenus[]
  readonly varieties: IPokemonSpeciesVariety[]
}

export interface IGenus {
  readonly genus: string
  readonly language: INamedApiResource
}

export interface IPokemonSpeciesDexEntry {
  readonly entry_number: number
  readonly pokedex: INamedApiResource
}

export interface IPalParkEncounterArea {
  readonly base_score: number
  readonly rate: number
  readonly area: INamedApiResource
}

export interface IPokemonSpeciesVariety {
  readonly is_default: boolean
  readonly pokemon: INamedApiResource
}
