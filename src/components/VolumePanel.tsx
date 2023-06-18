import VolumePanelProps from '../types/VolumePanelProps'
import { VOLUME_DOWN, VOLUME_UP } from "../constants";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function VolumePanel(props: VolumePanelProps) {
  return (
    <div className="d-flex justify-content-center p-3 px-5">
        <div className="px-4">
          <IconButton
            aria-label="volume-down"
            onClick={() => props.executeCommand(VOLUME_DOWN)}
          >
            <RemoveIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
        <div className="px-4">
          <IconButton
            aria-label="volume-up"
            onClick={() => props.executeCommand(VOLUME_UP)}
          >
            <AddIcon color="primary" fontSize="large" />
          </IconButton>
        </div>
      </div>
  )
}