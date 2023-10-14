import { create } from 'zustand'

import { IArticlesParams, IFeedParams } from '@/types/articles'

interface IArticlesStore {
  articlesParams: IArticlesParams
  feedParams: IFeedParams
  articlesCount: number
  feedCount: number
  resetArticlesParams: () => void
  setArticlesParams: (newArticles: IArticlesParams) => void
  setArticlesCount: (count: number) => void
  resetFeedParams: () => void
  setFeedParams: (newFeed: IFeedParams) => void
  setFeedCount: (count: number) => void
}

export const initArticlesParams: IArticlesParams = {
  tag: null,
  author: null,
  favorited: null,
  offset: 0,
  limit: 10,
}

export const initFeedParams: IFeedParams = {
  offset: 0,
  limit: 10,
}

const useArticlesStore = create<IArticlesStore>(set => ({
  articlesParams: { ...initArticlesParams },
  feedParams: { ...initFeedParams },
  articlesCount: 0,
  feedCount: 0,
  resetArticlesParams: () =>
    set({
      articlesParams: { ...initArticlesParams },
    }),
  setArticlesParams: newArticles => set({ articlesParams: newArticles }),
  setArticlesCount: count => set({ articlesCount: count }),
  resetFeedParams: () =>
    set({
      feedParams: { ...initFeedParams },
    }),
  setFeedParams: newFeed => set({ feedParams: newFeed }),
  setFeedCount: count => set({ feedCount: count }),
}))

export default useArticlesStore
