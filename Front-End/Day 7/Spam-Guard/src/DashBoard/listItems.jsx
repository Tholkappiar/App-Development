import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { AccountCircle, Warning } from '@mui/icons-material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { useNavigate } from 'react-router-dom';

// Functional component for list items
const ListItems = () => {
  const Nav = useNavigate();

  const navigateTospamDummy = () => {
    Nav('/spamdummy');
  };
  const navigateToReportDummy = () =>{
    Nav("/reportdummy")
  }

  return (
    <React.Fragment>
      <ListItemButton >
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="My Account" />
      </ListItemButton>
      <ListItemButton onClick={navigateTospamDummy}>
        <ListItemIcon>
          <Warning />
        </ListItemIcon>
        <ListItemText primary="Spam and Safe Count" />
      </ListItemButton>
      <ListItemButton onClick={navigateToReportDummy}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="FeedBack" />
      </ListItemButton> */}
    </React.Fragment>
  );
};

export const mainListItems = <ListItems />;

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Others
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <CleaningServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Auto Clean" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SwitchAccountIcon />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItemButton>
  </React.Fragment>
);
