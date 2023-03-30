import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Layout } from 'constants/Layout.styled';
import { GlobalStyle } from 'constants/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
