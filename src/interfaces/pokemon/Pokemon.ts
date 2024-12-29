import type { IVersionEncounterDetail, IVersionGameIndex } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'
import type { IPokemonAbility } from './Ability'

export interface IPokemon {
  readonly id: number
  readonly name: string
  readonly base_experience: number
  readonly height: number
  readonly is_default: boolean
  readonly order: number
  readonly weight: number
  readonly abilities: IPokemonAbility[]
  readonly forms: INamedApiResource[]
  readonly game_indices: IVersionGameIndex[]
  readonly held_items: IPokemonHeldItem[]
  readonly location_area_encounters: string
  readonly moves: IPokemonMove[]
  readonly sprites: IPokemonSprites
  readonly species: INamedApiResource
  readonly stats: IPokemonStat[]
  readonly types: IPokemonType[]
}

export interface IPokemonType {
  readonly slot: number
  readonly type: INamedApiResource
}

export interface IPokemonHeldItem {
  readonly item: INamedApiResource
  readonly version_details: IPokemonHeldItemVersion[]
}

export interface IPokemonHeldItemVersion {
  readonly version: INamedApiResource
  readonly rarity: number
}

export interface IPokemonMove {
  readonly move: INamedApiResource
  readonly version_group_details: IPokemonMoveVersion[]
}

export interface IPokemonMoveVersion {
  readonly move_learn_method: INamedApiResource
  readonly version_group: INamedApiResource
  readonly level_learned_at: number
}

export interface IPokemonStat {
  readonly stat: INamedApiResource
  readonly effort: number
  readonly base_stat: number
}

export interface IPokemonSprites {
  readonly back_default: string
  readonly back_female: string
  readonly back_shiny: string
  readonly back_shiny_female: string
  readonly front_default: string
  readonly front_female: string
  readonly front_shiny: string
  readonly front_shiny_female: string
  readonly other: IPokemonSpriteOther
  readonly versions: IPokemonSpriteVersion
}

interface ISpriteVariant {
  readonly back_default: string | null
  readonly back_female: string | null
  readonly back_gray: string | null
  readonly back_shiny: string | null
  readonly back_shiny_female: string | null
  readonly front_default: string | null
  readonly front_female: string | null
  readonly front_gray: string | null
  readonly front_shiny: string | null
  readonly front_shiny_female: string | null
}

interface IPokemonSpriteOther {
  readonly dream_world: Pick<ISpriteVariant, 'front_default' | 'front_female'>
  'official-artwork': {
    front_default: string
  }
}

interface IGeneration1Sprite {
  readonly 'red-blue': Pick<ISpriteVariant, 'back_default' | 'back_gray' | 'front_default' | 'front_gray'>
  readonly yellow: Pick<ISpriteVariant, 'back_default' | 'back_gray' | 'front_default' | 'front_gray'>
}

interface IGeneration2Sprite {
  readonly crystal: Pick<ISpriteVariant, 'back_default' | 'back_shiny' | 'front_default'>
  readonly gold: Pick<ISpriteVariant, 'back_default' | 'back_shiny' | 'front_default' | 'front_shiny'>
  readonly silver: Pick<ISpriteVariant, 'back_default' | 'back_shiny' | 'front_default' | 'front_shiny'>
}

interface IGeneration3Sprite {
  readonly emerald: Pick<ISpriteVariant, 'front_default' | 'front_shiny'>
  readonly 'firered-leafgreen': Pick<ISpriteVariant, 'back_default' | 'back_shiny' | 'front_default' | 'front_shiny'>
  readonly 'ruby-sapphire': Pick<ISpriteVariant, 'back_default' | 'back_shiny' | 'front_default' | 'front_shiny'>
}

type IDiamondPearlSprite = Pick<ISpriteVariant, 'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female' | 'front_default' |
'front_female' | 'front_shiny' | 'front_shiny_female'>

type IHeartGoldSoulSilverSprite = Pick<ISpriteVariant, 'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female' | 'front_default' |
'front_female' |
'front_shiny' |
'front_shiny_female'>

type IPlatinumSprite = Pick<ISpriteVariant, 'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female' | 'front_default' |
'front_female' |
'front_shiny' |
'front_shiny_female'>

interface IGeneration4Sprite {
  readonly 'diamon-pearl': IDiamondPearlSprite
  readonly 'heartgold-soulsilver': IHeartGoldSoulSilverSprite
  readonly platinum: IPlatinumSprite
}

type IBlackWhiteSprite = Pick<ISpriteVariant, 'back_default' | 'back_female' | 'back_shiny' | 'back_shiny_female' | 'front_default' |
'front_female' |
'front_shiny' |
'front_shiny_female'>

interface IGeneration5Sprite {
  readonly 'black-white': IBlackWhiteSprite & { animated: IBlackWhiteSprite }
}

interface IGeneration6Sprite {
  readonly 'omegaruby-alphasapphire': Pick<ISpriteVariant, 'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'>
  readonly 'x-y': Pick<ISpriteVariant, 'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'>
}

interface IGeneration7Sprite {
  readonly icons: Pick<ISpriteVariant, 'front_default' | 'front_female'>
  readonly 'ultra-sun-ultra-moon': Pick<ISpriteVariant, 'front_default' | 'front_female' | 'front_shiny' | 'front_shiny_female'>
}

interface IGeneration8Sprite {
  readonly icons: Pick<ISpriteVariant, 'front_default' | 'front_female'>
}

interface IPokemonSpriteVersion {
  readonly 'generation-i': IGeneration1Sprite
  readonly 'generation-ii': IGeneration2Sprite
  readonly 'generation-iii': IGeneration3Sprite
  readonly 'generation-iv': IGeneration4Sprite
  readonly 'generation-v': IGeneration5Sprite
  readonly 'generation-vi': IGeneration6Sprite
  readonly 'generation-vii': IGeneration7Sprite
  readonly 'generation-viii': IGeneration8Sprite
}

export interface ILocationAreaEncounter {
  readonly location_area: INamedApiResource
  readonly version_details: IVersionEncounterDetail[]
}
