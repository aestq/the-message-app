import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'

const rootContainer = document.getElementById('root')

if(rootContainer == null) {
  throw new Error('Not found root container')
}

const root = createRoot(rootContainer)

root.render(
  <App />
)
