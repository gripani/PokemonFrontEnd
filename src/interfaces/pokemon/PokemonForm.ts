import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPokemonForm {
  readonly id: number
  readonly name: string
  readonly order: number
  readonly form_order: number
  readonly is_default: boolean
  readonly is_battle_only: boolean
  readonly is_mega: boolean
  readonly form_name: string
  readonly pokemon: INamedApiResource
  readonly sprites: IPokemonFormSprites
  readonly version_group: INamedApiResource
  readonly names: IName[]
  readonly form_names: IName[]
}

export interface IPokemonFormSprites {
  readonly front_default: string
  readonly front_shiny: string
  readonly back_default: string
  readonly back_shiny: string
}
