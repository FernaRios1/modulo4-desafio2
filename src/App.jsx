import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import './index.css';

function App() {
    return (
        <Router>
            <NavbarComponent />
            <Routes>
            {/*<Route path="/" element={<Home />} />*/}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
