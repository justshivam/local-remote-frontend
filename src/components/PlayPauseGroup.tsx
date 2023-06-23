import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import IconButton from "@mui/material/IconButton";
import PlayPausePanelProps from "../types/PlayPausePanelProps";
import { NEXT_TRACK, PLAY_PAUSE_MUSIC, PREVIOUS_TRACK } from "../constants";

export default function PlayPauseGroup(props: PlayPausePanelProps) {
  return (
    <div>
      {props.playerInfo && (
        <div>
          <div className="text-center song-title-text-style h1">
            {props.playerInfo.title}
          </div>
          <div className="text-center song-artist-text-style">
            {props.playerInfo.artist}
          </div>
        </div>
      )}{" "}
      {!props.playerInfo && (
        <div className="text-center song-title-text-style h1">
          No Media Playing
        </div>
      )}
      <div className="d-flex justify-content-center mt-4">
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
            {props.playerInfo && props.playerInfo.isPlaying && (
              <PauseIcon color="primary" fontSize="large" />
            )}
            {!(props.playerInfo && props.playerInfo.isPlaying) && (
              <PlayArrowIcon color="primary" fontSize="large" />
            )}
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
    </div>
  );
}
