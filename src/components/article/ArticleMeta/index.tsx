import AuthorInfo from '@/components/common/AuthorInfo'
import Button from '@/components/common/Button'
import Icon from '@/components/common/Icon'
import { IArticleData } from '@/types/articles'

import { articleMeta, button, buttonGroup } from './index.css'

interface IProps {
  theme?: 'primary' | 'white'
  data: IArticleData
}

export default function ArticleMeta({ theme = 'primary', data }: IProps) {
  return (
    <div className={articleMeta}>
      <AuthorInfo
        imgSrc={data.author.image}
        username={data.author.username}
        createdAt={data.createdAt}
        textColor={theme}
      />
      <div className={buttonGroup}>
        <Button theme="outline-white">
          <div className={button}>
            <Icon name="plus" className="w-[10px]" />
            Follow {data.author.username}
          </div>
        </Button>
        <Button>
          <div className={button}>
            <Icon name="heart" type="solid" className="w-[12px]" />
            Favorite Article ({data.favoritesCount})
          </div>
        </Button>
      </div>
    </div>
  )
}
