import axios, { type AxiosResponse } from 'axios'
import type { IError } from '../interfaces/errors/Error'
import { API_URL } from '../utils/environment'

export abstract class ApiService <T> {
  private readonly baseUrl = API_URL
  protected abstract url: string

  protected async getData (identifier: string): Promise<T> {
    return await axios({
      method: 'GET',
      url: this.baseUrl + this.url + identifier
    })
      .then(
        (res: AxiosResponse<T, null>) => {
          return res.data
        },
        (err: IError) => {
          throw new Error(err.message)
        }
      )
  }
}
