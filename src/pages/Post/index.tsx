import { PostContent } from './components/PostContent'
import { PostSummary } from './components/PostSummary'

import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostSummary />
      <PostContent />
    </PostContainer>
  )
}
