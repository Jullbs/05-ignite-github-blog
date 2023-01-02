import { PostsDisplay } from './components/PostsDisplay'
import { SearchBar } from './components/SearchBar'
import { Summary } from './components/Summary'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Summary />

      <SearchBar />

      <PostsDisplay />
    </HomeContainer>
  )
}
