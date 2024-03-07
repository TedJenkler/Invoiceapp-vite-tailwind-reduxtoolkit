import Controll from "./components/Controll"
import { useSelector } from "react-redux"
import DisplayInvoice from "./components/DisplayInvoice";

function App() {
  const state = useSelector((state) => state.state);

  return (
    <main className="bg-lightbg">
      <Controll />
      <DisplayInvoice />
    </main>
  )
}

export default App
