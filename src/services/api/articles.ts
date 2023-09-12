import { apiInstance } from './api'

interface IArticlesParams {
  tag?: string // 태그 필터링
  author?: string // 작성자 필터링
  favorited?: string // 즐겨찾기 필터링
  offset?: number // 건너뛸 항목수(페이지네이션)
  limit?: number // 한 페이지당 항목수
}

export const fetchArticles = async (params: IArticlesParams) => {
  const res = await apiInstance.get('/articles', { params })
  return res.data
}
