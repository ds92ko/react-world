import { IArticlesParams } from '@/types/articles'

import { apiInstance } from './api'

export const fetchArticles = async (params: IArticlesParams) => {
  const res = await apiInstance.get('/articles', { params })
  return res.data
}
