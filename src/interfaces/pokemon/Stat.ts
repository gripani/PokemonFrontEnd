import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IStat {
  id: number
  name: string
  name_index: number
  is_battle_only: boolean
  affecting_moves: IMoveStatAffectSets
  affecting_natures: INatureStatAffectSets
  characteristics: INamedApiResource
  move_damage_class: INamedApiResource
  names: IName[]
}

export interface IMoveStatAffectSets {
  increase: IMoveStatAffect[]
  decrease: IMoveStatAffect[]
}

export interface IMoveStatAffect {
  change: number
  move: INamedApiResource
}

export interface INatureStatAffectSets {
  increase: INamedApiResource[]
  decrease: INamedApiResource[]
}
