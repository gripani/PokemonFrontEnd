import type { INamedApiResource } from '../utils/NamedApiResource'

export interface IVersionGroup {
  id: number
  name: string
  order: number
  generation: INamedApiResource
  move_learn_methods: INamedApiResource[]
  pokedexes: INamedApiResource[]
  regions: INamedApiResource[]
  versions: INamedApiResource[]
}
