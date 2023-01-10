import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { PostDataType } from '../..'

import { PostContentContainer } from './styles'

interface PostContentProps {
  postData: PostDataType
}

export function PostContent({ postData }: PostContentProps) {
  return (
    <PostContentContainer>
      <ReactMarkdown className="react-markdown">{postData.body}</ReactMarkdown>
    </PostContentContainer>
  )
}
