import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import PlayPausePanelProps from "../types/PlayPausePanelProps";
import { NEXT_TRACK, PLAY_PAUSE_MUSIC, PREVIOUS_TRACK } from "../constants";

export default function PlayPauseGroup(props: PlayPausePanelProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="px-4">
        <IconButton
          aria-label="volume-down"
          onClick={() => props.executeCommand(PREVIOUS_TRACK)}
        >
          <SkipPreviousIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
      <div className="px-4">
        <IconButton
          aria-label="volume-down"
          onClick={() => props.executeCommand(PLAY_PAUSE_MUSIC)}
        >
          <PlayArrowIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
      <div className="px-4">
        <IconButton
          aria-label="volume-down"
          onClick={() => props.executeCommand(NEXT_TRACK)}
        >
          <SkipNextIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}
