import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Layout } from 'constants/Layout.styled';
import { GlobalStyle } from 'constants/GlobalStyle';

import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  </React.StrictMode>
);
