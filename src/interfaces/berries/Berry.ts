import type { INamedApiResource } from '../utils/NamedApiResource'
import type { IBerryFlavorMap } from './BerryFlavor'

export interface IBerry {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: INamedApiResource
  flavors: IBerryFlavorMap[]
  item: INamedApiResource
  natural_gift_type: INamedApiResource
}
