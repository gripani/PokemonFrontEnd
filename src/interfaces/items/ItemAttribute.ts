import type { IDescription, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IItemAttribute {
  id: number
  name: string
  items: INamedApiResource[]
  names: IName[]
  descriptions: IDescription[]
}
