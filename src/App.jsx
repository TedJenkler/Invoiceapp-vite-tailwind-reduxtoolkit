import Controll from "./components/Controll"
import { useSelector } from "react-redux"

function App() {
  const state = useSelector((state) => state.state.state);
  console.log(state.length)

  return (
    <main>
      <Controll />
    </main>
  )
}

export default App
