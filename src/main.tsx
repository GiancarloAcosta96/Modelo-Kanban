import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import apptheme from './config/theme';
import { ThemeProvider } from '@fluentui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={apptheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
