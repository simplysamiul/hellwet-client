import { BrowserRouter } from "react-router-dom"
import TheLayout from "./layout/TheLayout"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <TheLayout />
      <Toaster />
    </BrowserRouter>
  )
};

export default App
