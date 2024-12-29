import type { IPokemonSpecies } from '../interfaces/pokemon/PokemonSpecies'
import { ApiService } from './api-service'

class PokemonSpeciesService extends ApiService<IPokemonSpecies> {
  protected url: string

  constructor () {
    super()
    this.url = '/pokemon-species'
  }

  async getPokemonSpecies (name: string): Promise<IPokemonSpecies> {
    return await this.getData('/' + name)
  }
}

export default PokemonSpeciesService
