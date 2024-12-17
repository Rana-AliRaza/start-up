import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import NotFound from "./page/notFound";
import Login from "./page/account/login";
import Register from "./page/account/register";
import ResetPassword from "./page/account/resetPassword";
import About from "./page/about";
import Verify from "./page/account/verify";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Layout from "./components/layout/Layout";
import Message from "./page/message";
import Profile from "./page/profile";
import Access from "./page/access";
import Account from "./page/account";
import Appoinments from "./page/appointments";
import Tasks from "./page/tasks";
import Inventory from "./page/invertory";
import Sales from "./page/sales";
import Demographics from "./page/demographics";
import Setting from "./page/setting";
import View from "./page/sales/View";



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
        <Route path="/access" element={ <Layout><Access /></Layout> } />
        <Route path="/account" element={ <Layout><Account /></Layout> } />
        <Route path="/appointments" element={ <Layout><Appoinments /></Layout> } />
        <Route path="/tasks" element={ <Layout><Tasks /></Layout> } />
        <Route path="/inventory" element={ <Layout><Inventory /></Layout> } />
        <Route path="/sales" element={ <Layout><Sales /></Layout> } />
        <Route path="/sales/view/*" element={ <Layout><View /></Layout> } />
        <Route path="/demographics" element={ <Layout><Demographics /></Layout> } />
        <Route path="/setting" element={ <Layout><Setting /></Layout> } />



        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
