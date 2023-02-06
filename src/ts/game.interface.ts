import { IGenres } from './genres.interface'
import { IPlatforms } from '@/ts/platforms.interface'

export interface IGame {
  added: number
  added_by_status: object
  background_image: string
  clip: null
  dominant_color: string
  esrb_rating: object
  genres: IGenres[]
  id: number
  metacritic: number
  name: string
  parent_platforms: IPlatforms[]
  rating: number
  rating_top: number
  ratings: object[]
  ratings_count: number
  released: string
  saturated_color: string
  score: null
  short_screenshots: object[]
  slug: string
  stores: object[]
  suggestions_count: number
  tags: object[]
  updated: string
  user_game: null
}
