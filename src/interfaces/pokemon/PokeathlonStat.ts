import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IPokeathlonStat {
  readonly id: number
  readonly name: string
  readonly names: IName[]
  readonly affecting_natures: INaturePokeathlonStatAffectSets
}

export interface INaturePokeathlonStatAffectSets {
  readonly increase: INaturePokeathlonStatAffect[]
  readonly decrease: INaturePokeathlonStatAffect[]
}

export interface INaturePokeathlonStatAffect {
  readonly max_change: number
  readonly nature: INamedApiResource
}
