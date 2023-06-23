import React from "react";
import { useEffect, useState } from "react";
import { LocalRemoteService } from "./api/Service";
import { ToastContainer, toast } from "react-toastify";
import TopBar from "./components/TopBar";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import VolumePanel from "./components/VolumePanel";
import PlayPauseGroup from "./components/PlayPauseGroup";

function App() {
  const [info, setInfo] = useState(null);

  const sendToast = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      theme: "dark",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  const executeCommand = async (localAction: string) => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    const response = await LocalRemoteService.action({
      action: localAction,
    });
    if (response.status >= 400) {
      sendToast(response.data.message);
    }
  };

  useEffect(() => {
    document.title = "Local Remote";
  }, []);

  useEffect(() => {
    const getMediaInformation = async () => {
      const response = await LocalRemoteService.info();
      if (response.status >= 500) {
        sendToast(response.data.message);
        return;
      }
      if (response.status === 202) setInfo(response.data);
      else setInfo(null);
    };
    const interval = setInterval(getMediaInformation, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <React.Fragment>
      <TopBar executeCommand={executeCommand} />
      <div className="d-flex justify-content-center h-100">
        <div className="mt-5">
          <PlayPauseGroup executeCommand={executeCommand} playerInfo={info} />
          <VolumePanel executeCommand={executeCommand} />
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
