import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IItemPocket {
  id: number
  name: string
  categories: INamedApiResource[]
}
