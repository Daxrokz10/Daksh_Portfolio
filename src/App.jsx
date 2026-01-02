import { useState } from 'react'
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Topbar />
    </>
  )
}

export default App
