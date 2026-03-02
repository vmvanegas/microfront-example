import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import App from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  renderType: 'createRoot',

  errorBoundary(err) {
    return (
      <div>
        <h2>Algo salió mal 😢</h2>
        <pre>{err.message}</pre>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
