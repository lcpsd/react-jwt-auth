import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthContextProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'element={<App />} />

            <Route path='profile' element={<ProtectedLayout />}>

            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
