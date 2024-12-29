import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IEggGroup {
  readonly id: number
  readonly name: string
  readonly names: IName[]
  readonly pokemon_species: INamedApiResource[]
}
