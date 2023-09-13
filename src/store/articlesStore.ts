import { create } from 'zustand'

import { IArticlesParams } from '@/types/articles'

interface IArticlesStore {
  articlesParams: IArticlesParams
  articlesCount: number
  resetArticlesParams: () => void
  setArticlesParams: (newArticles: IArticlesParams) => void
  setArticlesCount: (count: number) => void
}

export const initArticlesParams: IArticlesParams = {
  tag: null,
  author: null,
  favorited: null,
  offset: 0,
  limit: 10,
}

const useArticlesStore = create<IArticlesStore>(set => ({
  articlesParams: { ...initArticlesParams },
  articlesCount: 0,
  resetArticlesParams: () =>
    set({
      articlesParams: { ...initArticlesParams },
    }),
  setArticlesParams: newArticles => set({ articlesParams: newArticles }),
  setArticlesCount: count => set({ articlesCount: count }),
}))

export default useArticlesStore
