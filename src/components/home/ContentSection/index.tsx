import { container } from '@/styles/app.css'

import PopularTags from '../PopularTags'
import Tabs from '../Tabs'
import { content, popularTags, tabs } from './index.css'

export default function ContentSection() {
  return (
    <section className="mt-[24px]">
      <div className={container}>
        <div className={content}>
          <Tabs className={tabs} />
          <PopularTags className={popularTags} />
        </div>
      </div>
    </section>
  )
}
