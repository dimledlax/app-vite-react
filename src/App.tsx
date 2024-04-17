import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ColDef, Data, Table } from './Table'

function App() {
  const colDefs: ColDef[] = [
    {
      header: "Name",
      field: "name"
    },
    {
      header: "Age",
      field: "age"
    }
  ]

  const data: Data = [
    {
      name: "Alex",
      age: 50
    },
    {
      name: "Jack",
      age: 30
    }
  ]

  return (
    <Table colDef={colDefs} data={data}/>
  )
}

export default App
