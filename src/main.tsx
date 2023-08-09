import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import ReactGA from "react-ga4";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Policy from './pages/Policy.tsx';

// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-FRQ21922ZE");
// ページビューイベントを処理
ReactGA.send("pageview");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/policy",
    element: <Policy />,
  }
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
