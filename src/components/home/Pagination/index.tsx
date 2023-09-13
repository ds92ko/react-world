import { pageBtn, pageItem, pageList, pagination } from './index.css'

export function Pagination() {
  return (
    <div className={pagination}>
      <ul className={pageList}>
        <li className={pageItem}>
          <button type="button" className={pageBtn}>
            1
          </button>
        </li>
        <li className={pageItem}>
          <button type="button" className={pageBtn}>
            2
          </button>
        </li>
        <li className={pageItem}>
          <button type="button" className={pageBtn}>
            3
          </button>
        </li>
        <li className={pageItem}>
          <button type="button" className={pageBtn}>
            4
          </button>
        </li>
        <li className={pageItem}>
          <button type="button" className={pageBtn}>
            5
          </button>
        </li>
      </ul>
    </div>
  )
}
