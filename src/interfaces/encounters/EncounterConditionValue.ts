import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IEncounterConditionValue {
  id: number
  name: string
  condition: INamedApiResource[]
  names: IName[]
}
