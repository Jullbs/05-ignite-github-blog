import { PostsDisplay } from './components/PostsDisplay'
import { SearchBar } from './components/SearchBar'
import { UserSummary } from './components/UserSummary'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <UserSummary />

      <SearchBar />

      <PostsDisplay />
    </HomeContainer>
  )
}
