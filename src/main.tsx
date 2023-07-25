import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import ReactGA from "react-ga4";

// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-FRQ21922ZE");
// ページビューイベントを処理
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
