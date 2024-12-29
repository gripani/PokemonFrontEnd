import type { IDescription } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IGrowthRate {
  readonly id: number
  readonly name: string
  readonly formula: string
  readonly descriptions: IDescription[]
  readonly levels: IGrowthRateExperienceLevel[]
  readonly pokemon_species: INamedApiResource[]
}

export interface IGrowthRateExperienceLevel {
  readonly level: number
  readonly experience: number
}
