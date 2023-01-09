import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PostsContext } from '../../../../contexts/PostsContext'

import { SearchBarContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchBar() {
  const { postsAmount, fetchPosts } = useContext(PostsContext)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchBarContainer>
      <span>
        <h2>Publicações</h2>
        <p>
          {postsAmount === 1
            ? `${postsAmount} publicação`
            : `${postsAmount} publicações`}
        </p>
      </span>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          disabled={isSubmitting}
          {...register('query')}
        />
      </form>
    </SearchBarContainer>
  )
}
