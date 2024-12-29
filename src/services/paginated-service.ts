import type { IPaginated } from '../interfaces/utils/Paginated'
import { GENERATION_MAP } from '../utils/constants'
import { ApiService } from './api-service'

class PaginatedService extends ApiService<IPaginated> {
  protected url: string

  constructor () {
    super()
    this.url = '/pokemon'
  }

  async getManyByGeneration (generation: string): Promise<IPaginated> {
    const generationQuery = GENERATION_MAP[generation]
    return await this.getData(`?limit=${generationQuery.limit}&offset=${generationQuery.offset}`)
  }
}

export default PaginatedService
