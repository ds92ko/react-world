import Banner from '@/components/common/Banner'

import { description } from './index.css'

export default function BannerSection() {
  return (
    <Banner hasLogo>
      <p className={description}>A place to share your knowledge.</p>
    </Banner>
  )
}
