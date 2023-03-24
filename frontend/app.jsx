const React = require("react")
const ReactDOM = require("react-dom/client")
const Headder = require("./widgets/header/header")
const { BrowserRouter, Route, Routes} = require("react-router-dom")
const Home = require("./pages/home/home")
const Exercices = require("./pages/exercices/exercices")
const History = require("./pages/history/history")
const colorContext = require("./context/colorContext")

const root = ReactDOM.createRoot(document.getElementById("root"))
const HELPTAILWINDCSS = ["text-green", "text-red", "text-blue", "fill-green", "fill-red", "fill-blue", "bg-green", "bg-red", "bg-blue"]

const App = function() {

    const [primaryColor, setPrimaryColor] = React.useState("green")

    return (
        <BrowserRouter>
            <colorContext.Provider value={[primaryColor, setPrimaryColor]}>
                <div className={` w-full h-full bg-black text-${primaryColor}`}>
                    <Headder></Headder>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/exercices" element={<Exercices />}></Route>
                        <Route path="/history" element={<History />}></Route>
                    </Routes>
                </div>
            </colorContext.Provider>
        </BrowserRouter>
    )
}

root.render(<App />)