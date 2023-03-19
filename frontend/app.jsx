const React = require("react")
const ReactDOM = require("react-dom/client")
const Headder = require("./widgets/header/header")
const { BrowserRouter, Route, Routes} = require("react-router-dom")
const Home = require("./pages/home/home")
const Exercices = require("./pages/exercices/exercices")
const History = require("./pages/history/history")

const root = ReactDOM.createRoot(document.getElementById("root"))

const App = function() {
    return (
        <BrowserRouter>
            <div className=" w-full h-full">
                <Headder></Headder>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/exercices" element={<Exercices />}></Route>
                    <Route path="/history" element={<History />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

root.render(<App />)