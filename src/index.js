import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Effects from './pages/effects/Effects';
import Layouts from './layouts/Layouts';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SVGDraw from './pages/animations/SVGDraw/SVGDraw';
import App from './App';
import { AnimatePresence } from 'framer-motion'
import PageTransition from './pages/transitions/PageTransition/PageTransition';
import AppTest from './AppTest';
import CursorProvider from './utils/CursorProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/transitions",
  //   element: <SVGDraw />,
  // },
  {
    path: "/animations",
    element: <SVGDraw />,
  },
  {
    path: "/effects",
    element: <Effects />,
  },
  {
    path: "/test",
    element: <AppTest />,
  },
]);
export const routes = {
  "/": "Home",
  // "/transitions": "Transitions",
  "/animations": "Animations",
  "/effects": "Effects"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      {/* <CursorProvider> */}
        <PageTransition>
          <Layouts>
            <RouterProvider router={router}>
            </RouterProvider>
          </Layouts>
        </PageTransition>
      {/* </CursorProvider> */}
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
