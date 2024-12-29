import type { IDescription, IName } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMoveLearnMethod {
  id: number
  name: string
  descriptions: IDescription[]
  names: IName[]
  version_groups: INamedApiResource[]
}
