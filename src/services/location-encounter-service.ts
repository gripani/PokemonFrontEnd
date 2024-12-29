import type { ILocationAreaEncounter } from '../interfaces/pokemon/Pokemon'
import { ApiService } from './api-service'

class LocationEncouterService extends ApiService<ILocationAreaEncounter[]> {
  protected url: string
  private readonly endUrl: string

  constructor () {
    super()
    this.url = '/pokemon'
    this.endUrl = '/encounters'
  }

  async getLocationEncounters (id: number): Promise<ILocationAreaEncounter[]> {
    const identifier = '/' + id + this.endUrl
    return await this.getData(identifier)
  }
}

export default LocationEncouterService
