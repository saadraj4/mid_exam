import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
import { sampleData } from './components/Data'
import React from 'react'
import Filtering from './components/filtering'


function App() {




  return (
    <>
    <div>
       <Table />
       <Filtering/>
    </div>

    </>
  )
}

export default App
