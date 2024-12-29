import type { INamedApiResource } from './NamedApiResource'

export interface IPaginated {
  count: number
  next?: string | null
  previous?: string | null
  results: INamedApiResource[]
}
