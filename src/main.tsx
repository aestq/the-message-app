import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/main.scss'
import './shared/config/i18n'

const rootContainer = document.getElementById('root')

if(rootContainer == null) {
  throw new Error('Not found root container')
}

const root = createRoot(rootContainer)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
