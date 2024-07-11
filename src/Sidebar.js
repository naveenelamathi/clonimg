import React from "react";
import  { useState } from 'react';
import "./Sidebar.css";
import "./SendMail.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from "./SidebarOption";
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import Main from "./Main"
import SendMail from "./SendMail";
import EmailList from "./EmailList";

function Sidebar() {

  const [isSendMailOpen, setIsSendMailOpen] = useState(false);

  const toggleSendMail = () => {
    setIsSendMailOpen(!isSendMailOpen);
  };  

  // const dispatch = useDispatch(); 
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleCompose = () => {
  //   setIsOpen(!isOpen);
  // };
  
 
  

  return (
    <div className="container">
      <div className="row"></div>
      <div className="sidebar">
        <div>
        <Button
          startIcon={<AddIcon fontSize="large" />}
          className="sidebar__compose"
          onClick={toggleSendMail}
          
          // onClick={() => dispatch(openSendMessage())}
        >
          {isSendMailOpen ? ' Compose' : 'Compose'}
          
        </Button>
        {isSendMailOpen && <SendMail />}
        {/* <SendMail></SendMail> */}
        {/* {isOpen && (
        <div>
          <textarea rows="4" cols="50" placeholder="Write your message..."></textarea>
          <button onClick={toggleCompose}>Close</button>
        </div>
      )} */}
        </div>
        

        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={25}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title="Starred" number={11} />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={11} />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={11} />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={11} />
        <SidebarOption Icon={NoteIcon} title="Drafts" number={11} />
        <SidebarOption Icon={ExpandMoreIcon} title="More" number={11} />

        <div className="sidebar__footer">
          <div className="sidebar__footerIcons">
            <IconButton>
              <PersonIcon />
            </IconButton>
            <IconButton>
              <DuoIcon />
            </IconButton>
            <IconButton>
              <PhoneIphoneIcon />
            </IconButton>
          </div>
          

        </div>
      </div>
      <div className="container">
        <div className="row"></div>
            <Main></Main>
          </div>
    </div>

  );
}

export default Sidebar;
