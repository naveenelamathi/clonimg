import React from 'react'
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import "./SendMail.css";
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className='app' >
{/* <Mail></Mail> */}
<EmailList>
    {/* <SendMail></SendMail> */}
</EmailList>
{/* <Outlet/> */}
    </div>
  )
}

export default Main