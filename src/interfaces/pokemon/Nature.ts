import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface INature {
  readonly id: number
  readonly name: string
  readonly decreased_stat: INamedApiResource
  readonly increased_stat: INamedApiResource
  readonly hates_flavor: INamedApiResource
  readonly likes_flavor: INamedApiResource
  readonly pokeathlon_stat_changes: INatureStatChange[]
  readonly move_battle_style_preference: IMoveBattleStylePreference[]
  readonly names: IName[]
}

export interface INatureStatChange {
  readonly max_change: number
  readonly pokeathlon_stat: INamedApiResource
}

export interface IMoveBattleStylePreference {
  readonly low_hp_preference: number
  readonly high_hp_preference: number
  readonly move_battle_style: INamedApiResource
}
