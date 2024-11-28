import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clerk:
import { ClerkProvider } from '@clerk/clerk-react';

// Redux:
import { Provider } from 'react-redux';
import { store } from './Store/store';

// React Router:
import { HashRouter as Router } from 'react-router-dom';

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ClerkProvider
          publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
          signInForceRedirectUrl={process.env.PUBLIC_URL}
          signUpForceRedirectUrl={process.env.PUBLIC_URL}
          afterSignOutUrl={process.env.PUBLIC_URL}
        >
          <App />
        </ClerkProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();