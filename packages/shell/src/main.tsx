import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'my-microfrontend',
  app: () => System.import('my-microfrontend') as Promise<import('single-spa').LifeCycles<{}>>,
  activeWhen: ['/microfrontend'],
  customProps: {
    domElement: document.getElementById('single-spa-application:my-microfrontend'),
  }
});

start();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
