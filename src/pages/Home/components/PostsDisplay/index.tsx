import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { PostsContext } from '../../../../contexts/PostsContext'

import { PostCard, PostsDisplayContainer } from './styles'
import { formatDate } from '../../../../util/format'
import ReactMarkdown from 'react-markdown'

export function PostsDisplay() {
  const { posts } = useContext(PostsContext)
  const navigate = useNavigate()

  function handlePostClick(postNumber: number) {
    return navigate(`/post/${postNumber}`)
  }

  return (
    <PostsDisplayContainer>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <PostCard onClick={() => handlePostClick(post.number)}>
                <span>
                  <h2>{post.title}</h2>
                  <p>{formatDate(post.created_at)}</p>
                </span>
                <ReactMarkdown className="react-markdown">
                  {post.body}
                </ReactMarkdown>
              </PostCard>
            </li>
          )
        })}
      </ul>
    </PostsDisplayContainer>
  )
}
