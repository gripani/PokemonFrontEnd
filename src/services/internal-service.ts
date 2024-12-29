import axios, { type AxiosResponse } from 'axios'
import { INTERNAL_URL } from '../utils/environment'
import type { IError } from '../interfaces/errors/Error'

export abstract class InternalService <T> {
  private readonly baseUrl = INTERNAL_URL
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

  protected async getAll (): Promise<T[]> {
    return await axios({
      method: 'GET',
      url: this.baseUrl + this.url
    })
      .then(
        (res: AxiosResponse<T[], null>) => {
          return res.data
        },
        (err: IError) => {
          throw new Error(err.message)
        }
      )
  }
}
