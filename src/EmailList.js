import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react";
import "./EmailList.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from "@mui/icons-material/Redo";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { Checkbox } from '@mui/material';
import SmartButtonIcon from '@mui/icons-material/SmartButton';

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <CheckBoxIcon/>

          <>
            <ArrowDropDownIcon />
          </>
          <SmartButtonIcon>
            <RedoIcon />
          </SmartButtonIcon>
          <SmartButtonIcon>
            <MoreVertIcon />
          </SmartButtonIcon>
        </div>

        <div className="emailList__settingsRight">
          <SmartButtonIcon>
            <ChevronLeftIcon />
          </SmartButtonIcon>
          <SmartButtonIcon>
            <ChevronRightIcon />
          </SmartButtonIcon>
          <SmartButtonIcon>
            <KeyboardHideIcon />
          </SmartButtonIcon>
          <SmartButtonIcon>
            <SettingsIcon />
          </SmartButtonIcon>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me. Click the following button to follow me. Click the following button to follow me."
          time="9am"
        />
        <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
         <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
         <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
         <EmailRow
          title="Twitter"
          subject="Follow me!!"
          description="Click the following button to follow me."
          time="9am"
        />
      </div>
    </div>
  );
}

export default EmailList;
