export interface IArticlesData {
  slug: string
  title: string
  description: string
  body?: string
  tagList: string[]
  createdAt: string
  updatedAt?: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio: string
    image: string
    following: boolean
  }
}

export interface IFetchArticlesRes {
  articles: IArticlesData[]
  articlesCount: number
}