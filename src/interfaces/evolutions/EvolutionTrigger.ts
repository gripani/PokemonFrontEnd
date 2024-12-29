import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IEvolutionTrigger {
  id: number
  name: string
  names: IName[]
  pokemon_species: INamedApiResource[]
}
