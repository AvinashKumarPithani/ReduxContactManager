import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AddPersonForm from './components/AddPersonForm'

function App() {
  return (
      <Provider store={store}>
        <AddPersonForm />
      </Provider>
  )
}

export default App