import type { IconsData } from '../interfaces/internal/icons'
import { InternalService } from './internal-service'

class IconService extends InternalService<IconsData[]> {
  protected url: string

  constructor () {
    super()
    this.url = '/icons'
  }

  async getManyByGeneration (generation: string): Promise<IconsData[]> {
    return await this.getData(`?generation=${generation}`)
  }
}

export default IconService
