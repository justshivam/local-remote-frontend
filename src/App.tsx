import React from "react";
import { useEffect } from "react";
import { LocalRemoteService } from "./api/Service";
import { ToastContainer, toast } from "react-toastify";
import TopBar from './components/TopBar'
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import VolumePanel from "./components/VolumePanel";
import PlayPauseGroup from "./components/PlayPauseGroup";

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
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
    const response = await LocalRemoteService.action({
      action: localAction,
    });
    if (response.status >= 400) {
      sendToast(response.data.message);
    }
  };

  return (
    <React.Fragment>
      <TopBar executeCommand={executeCommand}/>
      <VolumePanel executeCommand={executeCommand} />
      <PlayPauseGroup executeCommand={executeCommand} />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
