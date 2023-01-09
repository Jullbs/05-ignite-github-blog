import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { PostsContextProvider } from './contexts/PostsContext'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <Router />
        </PostsContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
