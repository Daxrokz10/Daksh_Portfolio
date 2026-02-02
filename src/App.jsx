import { useState } from 'react'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Explorer from './components/Explorer';
import Tabs from './components/Tabs';
import Editor from './components/Editor';
import Bottombar from './components/Bottombar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      <div className="main-layout d-flex">
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabs />
          <Editor />
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default App
