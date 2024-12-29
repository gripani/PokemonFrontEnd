import type { IMove } from '../interfaces/moves/Move'
import { ApiService } from './api-service'

class MoveService extends ApiService<IMove> {
  protected url: string

  constructor () {
    super()
    this.url = '/move'
  }

  async getMove (name: string): Promise<IMove> {
    return await this.getData('/' + name)
  }
}

export default MoveService
