import type { IName, IVersionEncounterDetail } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface ILocationArea {
  readonly id: number
  readonly name: string
  readonly game_index: number
  readonly encounter_method_rates: IEncounterMethodRate[]
  readonly location: INamedApiResource
  readonly names: IName[]
  readonly pokemon_encounters: IPokemonEncounter[]
}

export interface IEncounterMethodRate {
  readonly encounter_method: INamedApiResource
  readonly version_details: IEncounterVersionDetails[]
}

export interface IEncounterVersionDetails {
  readonly rate: number
  readonly version_details: INamedApiResource
}

export interface IPokemonEncounter {
  readonly pokemon: INamedApiResource
  readonly version_details: IVersionEncounterDetail[]
}
