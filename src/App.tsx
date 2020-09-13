import React from 'react'
import { Provider, defaultTheme } from '@adobe/react-spectrum'
import './App.sass'
import { Routes } from './config/Routes'

const App = () => (
  <Provider theme={defaultTheme}>
    <Routes />
  </Provider>
)

export default App
