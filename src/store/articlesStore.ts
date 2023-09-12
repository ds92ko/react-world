import { create } from 'zustand'

import { IArticlesParams } from '@/types/articles'

interface IArticlesStore {
  articlesParams: IArticlesParams
  resetArticlesParams: () => void
  setArticlesParams: (newArticles: IArticlesParams) => void
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
  resetArticlesParams: () =>
    set({
      articlesParams: { ...initArticlesParams },
    }),
  setArticlesParams: newArticles => set({ articlesParams: newArticles }),
}))

export default useArticlesStore
