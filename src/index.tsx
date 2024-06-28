import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuestionProvider from './store/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <QuestionProvider>
      <App />
    </QuestionProvider>

  </React.StrictMode>
);


