import type { IEffect } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IItemFlingEffect {
  id: number
  name: string
  effect_entries: IEffect[]
  items: INamedApiResource[]
}
