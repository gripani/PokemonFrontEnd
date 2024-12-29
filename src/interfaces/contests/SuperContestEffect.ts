import type { IFlavorText } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface ISuperContestEffect {
  id: number
  name: string
  flavor_text_entries: IFlavorText[]
  moves: INamedApiResource[]
}
