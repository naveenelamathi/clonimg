import SmartButtonIcon from '@mui/icons-material/SmartButton';
import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useHistory} from "react-router-dom";
import "./Mail.css";
function Mail() {
  
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <SmartButtonIcon >
                        <ArrowBackIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <MoveToInboxIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <ErrorOutlineIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <DeleteIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <EmailIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <WatchLaterIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <CheckCircleIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <LabelImportantIcon />
                    </SmartButtonIcon>
                    <SmartButtonIcon>
                        <MoreVertIcon />
                    </SmartButtonIcon>
                </div>

                <div className="mail__toolsRight">
                    <SmartButtonIcon><UnfoldMoreIcon /></SmartButtonIcon>
                    <SmartButtonIcon><PrintIcon /></SmartButtonIcon>
                    <SmartButtonIcon><ExitToAppIcon /></SmartButtonIcon>
                </div>
            </div>

            <div className="mail__body">
                    <div className="mail__bodyHeader">
                        <h2>Subject</h2>
                        <LabelImportantIcon className="mail__important"/>
                        <p>Title</p>
                        <p className="mail__time">10pm</p>
                    </div>
                    <div className="mail__message">
                        <p>This is a message   </p>                     
                    </div>
                </div>
        </div>
    );
}

export default Mail
