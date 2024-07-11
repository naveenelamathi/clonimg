import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Main from "./Main"
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {useSelector} from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { Outlet  } from "react-router-dom";

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div>
      {/* <LoginPage></LoginPage> */}
      {/* <Header></Header> */}
      {/* <Sidebar></Sidebar> */}
      {/* <Main></Main> */}
      
      <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      {/* </AuthProvider> */}
    </Router>
     
    </div>
      );

}

export default App;
