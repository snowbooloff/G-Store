import { IAuthors } from '@/ts/authors.interface'
import { IGenres } from '@/ts/genres.interface'
import { IPlatforms } from '@/ts/platforms.interface'

export interface IGame {
  added: number
  background_image: string
  genres: IGenres[]
  id: number
  metacritic: number
  name: string
  parent_platforms: IPlatforms[]
  released: string
  suggestions_count: number

  //Game Details
  description_raw: string
  developers: IAuthors[]
  publishers: IAuthors[]
  achievements_count: number
}
