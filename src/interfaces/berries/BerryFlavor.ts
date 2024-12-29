import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IBerryFlavor {
  id: number
  name: string
  berries: IBerryFlavorMap[]
  contest_type: INamedApiResource
  names: IName[]
}

export interface IBerryFlavorMap {
  potency: number
  berry: INamedApiResource
}
