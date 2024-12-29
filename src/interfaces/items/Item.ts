import type { IGenerationGameIndex, IMachineVersionDetail, IName, IVerboseEffect, IVersionGroupFlavorText } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'
import type { IItemCategory } from './ItemCategory'

export interface IItem {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: INamedApiResource
  attributes: INamedApiResource[]
  category: IItemCategory
  effect_entries: IVerboseEffect[]
  flavor_text_entries: IVersionGroupFlavorText[]
  game_indices: IGenerationGameIndex[]
  names: IName[]
  sprites: IItemSprites
  held_by_pokemon: IItemHolderPokemon[]
  baby_trigger_for: INamedApiResource
  machines: IMachineVersionDetail[]
}

export interface IItemSprites {
  default: string
}

export interface IItemHolderPokemon {
  pokemon: string
  version_details: IItemHolderPokemonVersionDetail[]
}

export interface IItemHolderPokemonVersionDetail {
  rarity: string
  version: INamedApiResource
}
