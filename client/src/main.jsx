import { ClerkProvider } from '@clerk/clerk-react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext.jsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey} afterSignOutUrl="/">
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ClerkProvider>
)


// feat      -> New feature
// fix       -> Bug fix
// docs      -> Documentation
// style     -> Formatting (no logic change)
// refactor  -> Code cleanup
// perf      -> Performance improvement
// test      -> Tests
// build     -> Build system
// ci        -> CI/CD
// chore     -> Maintenance
// revert    -> Revert a commit