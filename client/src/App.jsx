import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Pagenotfound } from "./pages/Pagenotfound";
import { Layouts } from "./pages/Layout";
import { Logout } from "./pages/Logout";
import { ProfileInfo } from "./context/Profileinfo";
import { Adminlayout } from "./layout/Adminlayout";
import { AdminUser } from "./pages/Admin-user";
import { Admincontact } from "./pages/Admin-contact";

function App() {
  return (
    <div className="w-screen h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/me" element={<ProfileInfo />} />
          </Route>
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/admin" element={<Adminlayout/>}>
              <Route path="user" element={<AdminUser/>}/>
              <Route path="contact" element={<Admincontact/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
