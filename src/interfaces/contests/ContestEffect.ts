import type { IEffect, IFlavorText } from '../utils/Common'

export interface IContestEffect {
  id: number
  appeal: number
  jam: number
  effect_entries: IEffect[]
  flavor_text_entries: IFlavorText[]
}
