export class Unique <T> {
  array: T[]
  hashFunction: (item: T) => string

  constructor (array: T[], hashFunction: (item: T) => string) {
    this.array = array
    this.hashFunction = hashFunction
  }

  get (): T[] {
    const seenMap = new Map<string, T>()

    this.array.forEach(item => {
      const hashedItem = this.hashFunction(item)
      seenMap.set(hashedItem, item)
    })

    const uniqueValues: T[] = []
    seenMap.forEach(value => {
      uniqueValues.push(value)
    })
    return uniqueValues
  }
}
