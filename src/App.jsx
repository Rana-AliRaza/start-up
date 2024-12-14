import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Login from "./page/account/login";
import Register from "./page/account/register";
import ResetPassword from "./page/account/resetPassword";
import About from "./page/about";
import Verify from "./page/account/verify";
import Sidebar from "./components/layout/sidebarr/sidebar";
import Layout from "./components/layout/Layout";
import Message from "./page/message";
import Profile from "./page/profile";


function App() {
  return (
    <>
      <Routes>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/changepass" element={<ResetPassword />} />

        <Route path="/" element={ <Layout><Home /></Layout> } />
        <Route path="/message" element={ <Message />} />
        <Route path="/profile" element={ <Layout><Profile /></Layout> } />



        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
