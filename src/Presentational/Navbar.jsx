import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


export const Navbar = (props) => {

    const { handleChange, NavTabs } = props;

    return (
        <div className="Navbar" style={{ backgroundColor: "black", height: "100px", border: "1px solid wheat" }}>

            <Tabs
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            // style={{ border: "1px solid wheat", display: "flex", justifyContent: "center" }}
            >
                {NavTabs.map((tab, index) => (
                    <Tab key={index} label={tab} onClick={handleChange} style={{ color: "wheat", marginTop: "25px", }} />
                ))}

            </Tabs>

        </div>
    )
}
