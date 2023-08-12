import React from 'react'
import ReactDOM from 'react-dom/client'
import Endless from './pages/Endless.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import ReactGA from "react-ga4";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Policy from './pages/Policy.tsx';
import Top from './pages/Top.tsx';
import QuickAnswer from './pages/QuickAnswer.tsx';
import Release from './pages/Release.tsx';
import { registerSW } from 'virtual:pwa-register';


// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-FRQ21922ZE");
// ページビューイベントを処理
ReactGA.send("pageview");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/endless",
    element: <Endless />,
  },
  {
    path: "/quickanswer",
    element: <QuickAnswer />,
  },
  {
    path: "/release",
    element: <Release />,
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
registerSW();