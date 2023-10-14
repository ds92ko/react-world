import { IArticlesParams, IFeedParams } from '@/types/articles'

import { apiInstance } from './api'

export const fetchArticles = async (params: IArticlesParams) => {
  const res = await apiInstance.get('/articles', { params })
  return res.data
}

export const fetchArticleDetail = async (slug: string) => {
  const res = await apiInstance.get(`/articles/${slug}`)
  return res.data.article
}

export const fetchArticlesFeed = async (params: IFeedParams) => {
  const res = await apiInstance.get('/articles/feed', { params })
  return res.data
}
