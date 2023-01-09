import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { PostsContext } from '../../../../contexts/PostsContext'

import { PostCard, PostsDisplayContainer } from './styles'

export function PostsDisplay() {
  const { posts } = useContext(PostsContext)

  return (
    <PostsDisplayContainer>
      <ul>
        {posts.map((post) => {
          return (
            <PostCard key={post.id}>
              <span>
                <h2>{post.title}</h2>
                <p>
                  {formatDistanceToNow(new Date(post.created_at), {
                    addSuffix: true,
                    locale: ptBR,
                  })
                    .charAt(0)
                    .toUpperCase() +
                    formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })
                      .slice(1)
                      .toLowerCase()}
                </p>
              </span>
              <p>{post.body}</p>
            </PostCard>
          )
        })}
      </ul>
    </PostsDisplayContainer>
  )
}
