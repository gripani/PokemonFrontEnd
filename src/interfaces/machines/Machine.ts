import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMachine {
  id: number
  item: INamedApiResource
  move: INamedApiResource
  version_group: INamedApiResource
}
