import type { IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IVersion {
  id: number
  name: string
  names: IName[]
  version_group: INamedApiResource
}
