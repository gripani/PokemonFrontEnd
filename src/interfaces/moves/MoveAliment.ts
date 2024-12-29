import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMoveAliment {
  id: number
  name: string
  moves: INamedApiResource[]
  names: IName[]
}
