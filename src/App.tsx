import { useState } from "react"
import "./App.css"
import AddArticle from "./components/AddArticle"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TS components library</h1>
      <p>...will appear below</p>
      <div className="card">
        <AddArticle />
      </div>
      <div className="card"></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
