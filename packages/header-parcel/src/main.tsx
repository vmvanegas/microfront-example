import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,        // 👈 IMPORTANTE (React 18)
  rootComponent: App,
  renderType: 'createRoot', // 👈 CLAVE DEL ERROR
  errorBoundary() {
    return <div>Error en Header Parcel</div>;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
