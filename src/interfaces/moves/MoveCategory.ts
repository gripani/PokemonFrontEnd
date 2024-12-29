import type { IDescription } from '../utils/Common'
import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IMoveCategory {
  id: number
  name: string
  moves: INamedApiResource[]
  descriptions: IDescription[]
}
