import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom"
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import {MovieProvider} from "./context/MovieContext.jsx";

function App() {
    return (
        <MovieProvider className="">
            <NavBar/>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/Favorites" element={<Favorites></Favorites>}></Route>
                </Routes>

            </main>
        </MovieProvider>
    )
}

export default App
