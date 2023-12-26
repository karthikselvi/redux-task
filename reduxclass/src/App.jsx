import React from "react"
import { Provider } from "react-redux"
import store from './store'
import Quantity from "./Quantity"
import './quantity.css'



function App() {

  return (
    <Provider store={store}>
      <div>
        
        <Quantity/>
      </div>

    </Provider>
  )
}

export default App
