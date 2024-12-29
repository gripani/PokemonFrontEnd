import type { IEffect, IName, IVerboseEffect } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IAbility {
  readonly id: number
  readonly name: string
  readonly is_main_series: boolean
  readonly generation: INamedApiResource
  readonly names: IName[]
  readonly effect_entries: IVerboseEffect[]
  readonly effect_changes: IAbilityEffectChange[]
  readonly flavor_text_entries: IAbilityFlavorText[]
  readonly pokemon: IPokemonAbility[]
}

export interface IAbilityEffectChange {
  readonly effect_entries: IEffect[]
  readonly version_group: INamedApiResource
}

export interface IAbilityFlavorText {
  readonly flavor_text: string
  readonly language: INamedApiResource
  readonly version_group: INamedApiResource
}

export interface IPokemonAbility {
  readonly is_hidden: true
  readonly slot: number
  readonly ability: INamedApiResource
}
