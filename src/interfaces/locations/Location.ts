import type { IGenerationGameIndex, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface ILocation {
  id: number
  name: string
  region: INamedApiResource
  names: IName[]
  game_indices: IGenerationGameIndex[]
  areas: INamedApiResource[]
}
