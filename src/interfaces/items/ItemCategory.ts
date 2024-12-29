import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IItemCategory {
  id: number
  name: string
  items: INamedApiResource[]
  names: IName[]
  pocket: INamedApiResource
}
