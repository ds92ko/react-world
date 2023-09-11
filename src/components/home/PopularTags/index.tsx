'use client'

import { useQuery } from 'react-query'

import { TagItem, TagList } from '@/components/common/Tags'
import { fetchTags } from '@/services/api/tags'

import { asideBox, asideTitle } from './index.css'

interface IProps {
  className?: string
}

export default function PopularTags({ className = '' }: IProps) {
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery(
    'tags',
    async () => {
      const response = await fetchTags()
      return response
    },
    { staleTime: Infinity }
  )

  return (
    <aside className={className}>
      <div className={asideBox}>
        <h3 className={asideTitle}>Popular Tags</h3>
        {isLoading && <div>isLoading</div>}
        {isError && <div>isError</div>}
        {tags && (
          <TagList>
            {tags.map((tag: string) => (
              <TagItem key={tag}>{tag}</TagItem>
            ))}
          </TagList>
        )}
      </div>
    </aside>
  )
}
