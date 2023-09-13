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

export interface IArticlesParams {
  tag?: string | null // 태그 필터링
  author?: string | null // 작성자 필터링
  favorited?: string | null // 즐겨찾기 필터링
  offset?: number // 건너뛸 항목수(페이지네이션)
  limit?: number // 한 페이지당 항목수
}
