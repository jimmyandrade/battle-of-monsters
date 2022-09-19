import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'

import { App } from './components/app'
import { ThemeProvider } from './providers/theme-provider'

const container = document.querySelector('#root')

if (container !== null) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
} else {
  throw new Error('Could not find root element')
}
