import { IGenres } from '@/ts/genres.interface'
import { IPlatforms } from '@/ts/platforms.interface'
import { IDefaultProperties } from '@/ts/defaultProperties.interface'

type IAuthors = IDefaultProperties

export interface IGame extends IDefaultProperties {
  added: number
  background_image: string
  genres: IGenres[]
  metacritic: number
  parent_platforms: IPlatforms[]
  released: string
  suggestions_count: number

  //Game Details
  description_raw: string
  developers: IAuthors[]
  publishers: IAuthors[]
  achievements_count: number
}
