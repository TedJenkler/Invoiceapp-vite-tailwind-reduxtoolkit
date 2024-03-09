import Controll from "./components/Controll"
import { useSelector } from "react-redux"
import NoInvoice from "./components/NoInvoice";
import DisplayInvoiceMobile from "./components/DisplayInvoiceMobile";

function App() {
  const state = useSelector((state) => state.state.data);
  const theme = useSelector((state) => state.state.toggleMode)
  console.log(state.length)
  return (
    <main className={theme === "light" ? "light2 h-screen" : "dark2 h-screen"}>
      <Controll />
      {state.length > 0 ? <DisplayInvoiceMobile /> : null}
      {state.length < 1 ? <NoInvoice /> : null}
    </main>
  )
}

export default App
