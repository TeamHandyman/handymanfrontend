import * as React from 'react';
import Ongoing from "../../components/workerprofilecharts/Ongoing"
import Completed from "../../components/workerprofilecharts/Completed"
import Workerstable from "../../components/workerstable/Workerstable"
import Acceptedworkers from "../../components/workerstable/Acceptedworkers"
import Rejectedworkers from "../../components/workerstable/Rejectedworkers"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{color: "#1c1c1c", marginTop:"15px"}} sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color: "#1c1c1c", marginLeft: "20px"}} label="Pending Workers" {...a11yProps(0)} />
          <Tab style={{color: "#1c1c1c", marginLeft: "20px"}} label="Accepted Workers" {...a11yProps(1)} />
          <Tab style={{color: "#1c1c1c", marginLeft: "20px"}} label="Rejected Workers" {...a11yProps(2)} />
          {/* <Tab label="Past Tasks" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Workerstable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Acceptedworkers />
      </TabPanel>
      <TabPanel value={value} index={2}>
       < Rejectedworkers />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <Past />
      </TabPanel> */}
    </Box>
  );
}

