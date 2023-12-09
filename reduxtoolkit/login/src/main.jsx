import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import store from './Components/store/Store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-sqn6rg3fem5xljnz.us.auth0.com"
      clientId="8h6FOIrjHTilYZJdsZRupnVWYMV6P5xe"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
