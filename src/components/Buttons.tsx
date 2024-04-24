import React, { useState } from "react";
import { Button } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Buttons = () => {
  const handleClick = () => {
    window.open(
      "https://apparelgroupapps.com/bliss-bites-menu/about-us/pdf.pdf",
      "_blank"
    );
  };

  return (
    <div className="buttons-div">
      <Button size="small" onClick={handleClick} startIcon={<WhatsAppIcon/>}>

      </Button>
      <Button size="small" onClick={handleClick} startIcon={<CallIcon/>}>
    
      </Button>
      <Button size="small" onClick={handleClick}>
        About Us
      </Button>
    </div>
  );
};

export default Buttons;
