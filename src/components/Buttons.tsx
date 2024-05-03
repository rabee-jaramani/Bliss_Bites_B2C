import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Buttons = () => {
const [windowWidth,setWindowWidth]=useState(0)
  console.log(window.innerWidth)
  const handleClick = () => {
    window.open(
      "https://apparelgroupapps.com/bliss-bites-menu/about-us/pdf.pdf",
      "_blank"
    );
  };
  const handleClickWhatssap = () => {
    window.open(
      "https://wa.me/971508377409",
      "_blank"
    );
  };
  const handleClickCallUs = () => {
    window.open(
      "tel:+971508377409",
      "_blank"
    );
  };
useEffect(()=>{
  setWindowWidth(window.innerWidth)
})
  return (
    <div className="buttons-div">
      <Button size="small" onClick={handleClickWhatssap} startIcon={<WhatsAppIcon/>}>

      </Button>
      <Button size="small" onClick={handleClickCallUs} startIcon={<CallIcon/>}>
      </Button>
      <Button size="small" onClick={handleClick}>
        About Us
      </Button>
    </div>
  );
};

export default Buttons;
