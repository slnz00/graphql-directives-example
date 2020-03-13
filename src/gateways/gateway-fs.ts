import * as fs from "fs"
import { cloneDeep } from 'lodash'

export class GatewayFS<T extends object> {
  private readonly filePath: string
  private entities: T[]

  constructor(filePath) {
    this.filePath = filePath
    this.loadFromFile()
  }

  getAll(): T[] {
    return cloneDeep(this.entities)
  }

  create(entity: T): T {
    this.entities.push(cloneDeep(entity))
    this.saveToFile()
    return entity
  }

  private loadFromFile(): void {
    try {
      this.entities = JSON.parse(
        fs.readFileSync(this.filePath, 'utf8')
      )
    } catch (error) {
      this.entities = []
    }
  }

  private saveToFile(): void {
    const content = JSON.stringify(this.entities)
    fs.writeFileSync(this.filePath, content)
  }
}
