const React = require("react")
const ReactDOM = require("react-dom/client")
const Headder = require("./widgets/header/header")
const { BrowserRouter, Route, Routes} = require("react-router-dom")
const Home = require("./pages/home/home")
const History = require("./pages/history/history")
const Footer = require("./widgets/footer/footer")

const root = ReactDOM.createRoot(document.getElementById("root"))

const App = function() {
    return (
        <BrowserRouter>
            <div className="w-full h-full bg-black text-green">
                <Headder />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/history" element={<History />}></Route>
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

root.render(<App />)