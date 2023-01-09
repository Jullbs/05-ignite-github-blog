import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Post {
  id: number
  title: string
  body: string
  created_at: string
}

interface PostsContextType {
  posts: Post[]
  postsAmount: number
  fetchPosts: (query?: string) => void
}

export const PostsContext = createContext({} as PostsContextType)

interface PostsContextProps {
  children: ReactNode
}

export function PostsContextProvider({ children }: PostsContextProps) {
  const [posts, setPosts] = useState([])
  const [postsAmount, setPostsAmount] = useState(0)

  async function fetchPosts(query?: string) {
    let response

    if (query) {
      response = await api.get('search/issues', {
        params: {
          q: query + ' repo:jullbs/05-ignite-github-blog',
        },
      })
    } else {
      response = await api.get('search/issues', {
        params: {
          q: 'repo:jullbs/05-ignite-github-blog',
        },
      })
    }

    setPosts(response.data.items)
    setPostsAmount(response.data.total_count)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, postsAmount, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
