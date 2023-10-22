import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/main.scss'

const rootContainer = document.getElementById('root')

if(rootContainer == null) {
  throw new Error('Not found root container')
}

const root = createRoot(rootContainer)

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
