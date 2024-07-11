// import React from "react";
// import "./SendMail.css";
// import CloseIcon from '@mui/icons-material/Close';
// import { Button } from "@material-ui/core";

// import { useDispatch } from "react-redux";


// function SendMail({ onClose }) {
  

//   return (
//     <div className="sendMail">
//       <div className="sendMail__header">
//         <h3>New Message</h3>
//         <CloseIcon
          
//           className="sendMail__close"
//         />
//       </div>

//       <form >
//         <input
//           name="to"
//           placeholder="To"
//           type="email"
         
//         />
        

//         <input
//           name="subject"
//           placeholder="Subject"
//           type="text"
//          ></input>

        
//         <input
//           name="message"
//           placeholder="Message"
//           type="text"
//           className="sendMail__message"
          
//         />
       
//         <div className="sendMail__options">
//           <Button
//             className="sendMail__send"
//             variant="contained"
//             color="primary"
//             type="submit"
//           >
//             Send
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SendMail;






import React, { useState } from 'react';
import "./SendMail.css";
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@material-ui/core";

// import CloseIcon from '@material-ui/icons/Close';
// import Button from '@material-ui/core/Button';

const SendMail = ({ onClose }) => {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // const response = await axios.post('http://localhost:3000/from', formData
      
    // );
    // Handle form submission logic here, such as sending the form data to a server
    console.log('Form Data:', formData);
    onClose(); // Close the compose box after submission
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={onClose} />
      </div>
      {/* <form onSubmit={handleSubmit}> */}

    {/*  */}
    <form action="https://formspree.io/f/manwnydl"  method="POST"
    >
        <input
          name="to"
          placeholder="To"
          type="email"
          value={formData.to}
          onChange={handleChange}
        />
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
        />
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;

