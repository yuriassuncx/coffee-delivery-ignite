import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { CompleteOrder } from "./pages/CompleteOrder";
import { HomePage } from "./pages/HomePage";
import { OrderConfimed } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrder />} />
                <Route path="/confirmedOrder" element={<OrderConfimed />} />
            </Route>
        </Routes>
    )
}