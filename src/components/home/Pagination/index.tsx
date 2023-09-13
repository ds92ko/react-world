import useArticlesStore from '@/store/articlesStore'

import { pageBtn, pageList, pagination } from './index.css'

export function Pagination() {
  const { articlesParams, setArticlesParams, articlesCount } =
    useArticlesStore()

  const { offset = 0, limit = 10 } = articlesParams

  const currentPage = Math.floor(offset / limit) + 1
  const totalPages = Math.ceil(articlesCount / limit)

  const handleClickPage = (page: number) => {
    const newOffset = (page - 1) * limit
    setArticlesParams({ ...articlesParams, offset: newOffset })
  }

  return (
    totalPages > 1 && (
      <div className={pagination}>
        <ul className={pageList}>
          {Array.from({ length: totalPages }, (_, idx) => (
            <li
              key={idx + 1}
              className={idx + 1 === currentPage ? 'current' : ''}>
              <button
                type="button"
                className={pageBtn}
                onClick={() => handleClickPage(idx + 1)}>
                {idx + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}
