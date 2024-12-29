import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IGender {
  readonly id: number
  readonly name: string
  readonly pokemon_species_details: IPokemonSpeciesGender[]
  readonly required_for_evolution: INamedApiResource[]
}

export interface IPokemonSpeciesGender {
  readonly rate: number
  readonly pokemon_species: INamedApiResource[]
}
