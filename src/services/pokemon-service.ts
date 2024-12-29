import type { IPokemon } from '../interfaces/pokemon/Pokemon'
import { ApiService } from './api-service'

class PokemonService extends ApiService<IPokemon> {
  protected url: string

  constructor () {
    super()
    this.url = '/pokemon'
  }

  async getPokemon (name: string): Promise<IPokemon> {
    return await this.getData('/' + name)
  }
}

export default PokemonService
