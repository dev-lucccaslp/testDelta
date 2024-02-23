import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { AppRoutes } from './routes'

export function App() {
  return(
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    
    <AppRoutes />
    
   </ThemeProvider>
  )
}