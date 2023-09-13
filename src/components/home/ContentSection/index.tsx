import { container } from '@/styles/app.css'

import Articles from '../Articles'
import PopularTags from '../PopularTags'
import { articles, content, popularTags } from './index.css'

export default function ContentSection() {
  return (
    <section className="mt-[24px]">
      <div className={container}>
        <div className={content}>
          <Articles className={articles} />
          <PopularTags className={popularTags} />
        </div>
      </div>
    </section>
  )
}
