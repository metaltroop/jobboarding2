import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col">
          <section className="">
            <Navbar />
          </section>
          <main className="">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
