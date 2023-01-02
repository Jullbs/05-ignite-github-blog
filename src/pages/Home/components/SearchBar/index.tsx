import { SearchBarContainer } from './styles'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <span>
        <h2>Publicações</h2>
        <p>0 publicações</p>
      </span>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
