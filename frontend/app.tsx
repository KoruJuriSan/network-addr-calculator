import React from "react"
import { createRoot } from "react-dom/client"
import Header from "./widgets/header/header"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home/home"
import History from "./pages/history/history"
import Footer from "./widgets/footer/footer"

const root = createRoot(document.getElementById("root")!)

const App = function() {
    return (
        <BrowserRouter>
            <div className="w-full h-full bg-black text-green">
                <Header />
                <Routes>
                    <Route path="network-addr-calculator/" element={<Home />}></Route>
                    <Route path="network-addr-calculator/history" element={<History />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

root.render(<App />)