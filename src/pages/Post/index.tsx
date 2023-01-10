import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

import { PostContent } from './components/PostContent'
import { PostSummary } from './components/PostSummary'

import { PostContainer } from './styles'

export interface PostDataType {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export function Post() {
  const { number } = useParams()
  const [postData, setPostData] = useState<PostDataType>({
    title: '',
    body: '',
    created_at: '',
    comments: 0,
    html_url: '',
    user: {
      login: '',
    },
  })

  useEffect(() => {
    async function fetchPostData() {
      const response = await api.get(
        `repos/jullbs/05-ignite-github-blog/issues/${number}`,
      )

      setPostData(response.data)
    }

    fetchPostData()
  }, [number])

  return (
    <PostContainer>
      <PostSummary postData={postData} />
      <PostContent postData={postData} />
    </PostContainer>
  )
}
