import type { MovesData } from '../interfaces/internal/moves'
import { InternalService } from './internal-service'

class MoveTypeService extends InternalService<MovesData> {
  protected url: string

  constructor () {
    super()
    this.url = '/move-types'
  }

  async getMoves (): Promise<MovesData[]> {
    return await this.getAll()
  }
}

export default MoveTypeService
