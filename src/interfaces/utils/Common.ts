import type { INamedApiResource } from './NamedApiResource'

export interface ICacheableResource {
  id: number
  name: string
}

export interface IDescription {
  description: string
  language: INamedApiResource
}

export interface IEffect {
  effect: string
  language: INamedApiResource
}

export interface IEncounter {
  min_level: number
  max_level: number
  condition_values: INamedApiResource[]
  chance: number
  method: INamedApiResource
}

export interface IFlavorText {
  flavor_text: string
  language: INamedApiResource
  version: INamedApiResource
}

export interface IGenerationGameIndex {
  game_index: number
  generation: INamedApiResource
}

export interface IMachineVersionDetail {
  machine: INamedApiResource
  version_group: INamedApiResource
}

export interface IName {
  name: string
  language: INamedApiResource
}

export interface IVerboseEffect {
  effect: string
  short_effect: string
  language: INamedApiResource
}

export interface IVersionEncounterDetail {
  version: INamedApiResource
  max_chance: string
  encounter_details: IEncounter[]
}

export interface IVersionGameIndex {
  game_index: number
  version: INamedApiResource
}

export interface IVersionGroupFlavorText {
  text: string
  language: INamedApiResource
  version_group: INamedApiResource
}
