import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function ColorTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header title='Portafolio' titleBreadcrumb='Portafolio' />

            <Box className='px-4 md:px-32 py-16 min-w-full'>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label='basic tabs example'>
                        <Tab
                            className='bg-gray-300 text-black hover:text-primary'
                            label='Marketing'
                            {...a11yProps(0)}
                        />
                        <Tab
                            className='bg-gray-300 text-black hover:text-primary'
                            label='Creación de contenido'
                            {...a11yProps(1)}
                        />
                        <Tab
                            className='bg-gray-300 text-black hover:text-primary'
                            label='Diseño y desarrollo web'
                            {...a11yProps(2)}
                        />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {/* <div className="flex flex-auto justify-between items-center bg-black w-full"> */}
                        <div className='flex flex-col space-y-2 items-center text-center'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>Espacio para nombres</p>
                        </div>
                        <div className='flex flex-col space-y-2 items-center text-center'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>Espacio para nombres</p>
                        </div>
                        <div className='flex flex-col space-y-2 items-center text-center'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>Espacio para nombres</p>
                        </div>
                    {/* </div> */}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
        </div>
    );
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            className='border shadow-xl rounded-md'
            {...other}>
            {value === index && (
                <div className='grid grid-cols-3 gap-8 p-8'>{children}</div>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
