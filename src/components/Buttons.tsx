import React, { useState } from "react";
import { Button } from "@mui/material";

const Buttons = () => {
  const handleClick = () => {
    window.open(
      "https://apparelgroupapps.com/bliss-bites-menu/about-us/pdf.pdf",
      "_blank"
    );
  };

  return (
    <div className="buttons-div">
      <Button size="small" onClick={handleClick}>
        Whatssap
      </Button>
      <Button size="small" onClick={handleClick}>
        Call Us
      </Button>
      <Button size="small" onClick={handleClick}>
        About Us
      </Button>
    </div>
  );
};

export default Buttons;
