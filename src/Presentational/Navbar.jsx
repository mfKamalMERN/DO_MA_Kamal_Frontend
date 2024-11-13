import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


export const Navbar = (props) => {

    const { handleChange, NavTabs } = props;

    return (

        <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            style={{ backgroundColor: "black" }}
        >
            {NavTabs.map((tab, index) => (
                <Tab key={index} label={tab} onClick={handleChange} style={{ color: "wheat", }} />
            ))}

        </Tabs>

    )
}
