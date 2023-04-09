import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import Home from "./pages/Home";
import App from "./App";
import ErrorPage from "./pages/error-page";
import Paywall from "./pages/Paywall";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/early-bird-preorder",
    element: <Paywall/>,
    errorElement: <ErrorPage/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={ defaultTheme }>
    <App>
      <RouterProvider router={ router }/>
    </App>
  </ThemeProvider>
);
