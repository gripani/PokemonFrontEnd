import type { IDescription, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMoveDamageClass {
  id: number
  name: string
  descriptions: IDescription[]
  moves: INamedApiResource[]
  names: IName[]
}
