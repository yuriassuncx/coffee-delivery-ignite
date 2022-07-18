import { BrowserRouter } from "react-router-dom"
import { CartContextProvider } from "./contexts/CartContext"
import { Router } from "./Routes"

export function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
