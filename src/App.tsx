import React from "react";
import { useState, useEffect } from "react";
import { LocalRemoteService } from "./api/Service";
import { VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP } from "./constants";
import { ToastContainer, toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {

  const sendToast = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: "dark",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  useEffect(() => {
    document.title = "Local Remote";
  }, []);

  const executeCommand = async (localAction:string) => {
    const response = await LocalRemoteService.action({
      action: localAction,
    });
    if (response.status >= 400) {
      sendToast(response.data.message);
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between p-3 px-5">
        <IconButton
          aria-label="sleep"
          onClick={() => sendToast("Test Message")}
        >
          <BedtimeIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="sleep"
          onClick={() => executeCommand(VOLUME_MUTE)}
        >
          <VolumeOffIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
      <div className="d-flex justify-content-center p-3 px-5">
        <div className="px-4">
          <IconButton
            aria-label="volume-down"
            onClick={() => executeCommand(VOLUME_DOWN)}
          >
            <RemoveIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
        <div className="px-4">
          <IconButton
            aria-label="volume-up"
            onClick={() => executeCommand(VOLUME_UP)}
          >
            <AddIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
