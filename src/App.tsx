import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColDef, Data, Table } from './Table'
import { Button } from './Button'

function App() {
  const colDefs: ColDef[] = [
    {
      header: "Name",
      field: "name"
    },
    {
      header: "Age",
      field: "age"
    },
    {
      header: "City",
      field: "city"
    },
    {
      header: "State",
      field: "state"
    }
  ]

  const data: Data = [
    {
      name: "Jack",
      age: 30,
      city: "Los Angeles",
      state: "CA"
    },
    {
      age: 50,
      name: "Alex",
      city: "Boston",
      state: "MA"
    },
    {
      name: "Donald",
      age: 40,
      city: "Portland",
      state: "OR"
    },
    {
      name: "Rob",
      age: 20,
      city: "New York",
      state: "NY"
    }
  ]

  return (
    <>
      <Table colDef={colDefs} data={data}/>
      <Button onClick={() => {console.log("onclick")}}>Load Data</Button>
    </>
  )
}

export default App
