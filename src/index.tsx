import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AllCatsPage } from './pages/AllCatsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LikedCatsPage } from './pages/LikedCatsPage';
import { NotFoundPage } from './pages/NotFound';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<AllCatsPage />} />
              <Route path='liked' element={<LikedCatsPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
