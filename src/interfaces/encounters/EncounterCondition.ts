import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IEncounterCondition {
  id: number
  name: string
  names: IName[]
  values: INamedApiResource[]
}
