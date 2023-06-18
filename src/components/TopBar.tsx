import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import BedtimeIcon from "@mui/icons-material/Bedtime";
import IconButton from "@mui/material/IconButton";
import TopBarProps from '../types/TopBarProps';
import { VOLUME_MUTE } from '../constants';

const TopBar = (props: TopBarProps) => {
  return (
    <div className="d-flex justify-content-between p-5 px-5">
        <IconButton
          aria-label="sleep"
          onClick={() => props.executeCommand('Test')}
        >
          <BedtimeIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="mute"
          onClick={() => props.executeCommand(VOLUME_MUTE)}
        >
          <VolumeOffIcon color="primary" fontSize="large" />
        </IconButton>
      </div>
  )
}

export default TopBar;