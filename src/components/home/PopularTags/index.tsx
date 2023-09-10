import { TagItem, TagList } from '@/components/common/Tags'

import { asideBox, asideTitle } from './index.css'

interface IProps {
  className?: string
}

export default function PopularTags({ className }: IProps) {
  return (
    <aside className={className}>
      <div className={asideBox}>
        <h3 className={asideTitle}>Popular Tags</h3>
        <TagList>
          <TagItem>voluptate</TagItem>
          <TagItem>rerum</TagItem>
        </TagList>
      </div>
    </aside>
  )
}

PopularTags.defaultProps = {
  className: '',
}
