import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BubbleSortComponent from './component/BubbleSortComponent'
import InefficientSearchComponent from './component/BinarySearch'
// bonjour
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InefficientSearchComponent/>
    </>
  )
}

export default App
