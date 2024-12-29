import type { IName } from '../utils/Common'

export interface IEncounterMethod {
  id: number
  name: string
  order: number
  names: IName[]
}
