import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IBerryFirmness {
  id: number
  name: string
  berries: INamedApiResource[]
  names: IName[]
}
