import Controll from "./components/Controll";
import { useSelector } from "react-redux";
import NoInvoice from "./components/NoInvoice";
import DisplayInvoiceMobile from "./components/DisplayInvoiceMobile";
import DisplayInvoiceDesktop from "./components/DisplayInvoiceDesktop";

function App() {
  const state = useSelector((state) => state.state.data);
  const theme = useSelector((state) => state.state.toggleMode);
  console.log(state.length);

  return (
    <main className={`${theme === "light" ? "light2" : "dark2"} h-screen xl:px-60 xl:py-16 xl:overflow-scroll`}>
      <Controll />
      {state.length > 0 && <DisplayInvoiceMobile />}
      {state.length > 0 && <DisplayInvoiceDesktop />}
      {state.length < 1 && <NoInvoice />}
    </main>
  );
}

export default App;
