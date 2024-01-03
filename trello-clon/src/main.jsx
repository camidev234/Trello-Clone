import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TrelloContextProvider } from './context/TrelloContext'
import { ListsContainer } from './components/ListsContainer';
import { BarNav } from './components/BarNav';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarNav/>
    <TrelloContextProvider>
      <ListsContainer />
    </TrelloContextProvider>
  </React.StrictMode>,
)
