import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IContestType {
  id: number
  name: string
  berry_flavor: INamedApiResource
  names: IContestName[]
}

export interface IContestName {
  name: string
  color: string
  language: INamedApiResource
}
