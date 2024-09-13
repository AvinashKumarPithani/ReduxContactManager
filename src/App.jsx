import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AddPersonForm from './components/AddPersonForm'
import PeopleList from './components/PeopleList'

function App() {
  return (
      <Provider store={store}>
        <h1>Contact Manager using Redux Store</h1>
        <AddPersonForm />
        <PeopleList />
      </Provider>
  )
}

export default App