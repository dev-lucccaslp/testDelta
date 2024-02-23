import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Toaster } from 'sonner';
import { AppRoutes } from './routes'
import { ListStudentsProvider } from './context/StudentsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ListStudentsProvider>
        <Toaster />
        <GlobalStyle />
        <AppRoutes />
      </ListStudentsProvider>
    </ThemeProvider>
  )
}