import { Summary } from './components/Summary'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Summary />
      <p>SearchBar</p>
      <p>Posts</p>
    </HomeContainer>
  )
}
