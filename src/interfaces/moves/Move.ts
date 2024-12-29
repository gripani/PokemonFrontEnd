import type { IAbilityEffectChange } from '../pokemon/Ability'
import type { IMachineVersionDetail, IName, IVerboseEffect } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMove {
  id: number
  name: string
  accuracy: number
  effect_chance: number
  pp: number
  priority: number
  power: number
  contest_combos: IContestComboSets
  contest_type: INamedApiResource
  contest_effect: INamedApiResource
  damage_class: INamedApiResource
  effect_entries: IVerboseEffect[]
  effect_changes: IAbilityEffectChange[]
  flavor_text_entries: IMoveFlavorText[]
  generation: INamedApiResource
  machines: IMachineVersionDetail[]
  meta: IMoveMetaData
  names: IName[]
  past_values: IPastMoveStatValues[]
  stat_changes: IMoveStatChange[]
  super_contest_effect: INamedApiResource
  target: INamedApiResource
  type: INamedApiResource
}

export interface IContestComboSets {
  normal: IContestComboDetail
  super: IContestComboDetail
}

export interface IContestComboDetail {
  use_before: INamedApiResource[]
  use_after: INamedApiResource[]
}

export interface IMoveFlavorText {
  flavor_text: string
  language: INamedApiResource
  version_group: INamedApiResource
}

export interface IMoveMetaData {
  aliment: INamedApiResource
  category: INamedApiResource
  min_hits: number
  max_hits: number
  min_turns: number
  max_turns: number
  drain: number
  healing: number
  crit_rate: number
  aliment_chance: number
  flinch_chance: number
  stat_chance: number
}

export interface IMoveStatChange {
  change: number
  stat: INamedApiResource
}

export interface IPastMoveStatValues {
  accuracy: number
  effect_chance: number
  power: number
  pp: number
  effect_entries: IVerboseEffect[]
  type: INamedApiResource
  version_group: INamedApiResource
}
