// TS Interfaces
import type { LocationQueryValue } from 'vue-router'

export interface IQuery {
  date?: string | LocationQueryValue[]
  sort?: string | LocationQueryValue[]
  rating?: any
  genres?: any
  platforms?: any
  tags?: string[]
  size: number
  search?: string
}
