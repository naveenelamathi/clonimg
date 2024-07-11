import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useHistory } from "react-router-dom";

function EmailRow({ title, subject, description, time }) {

  return (
    <div >
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
