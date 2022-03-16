import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Modal,
} from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "1px solid gray",
    boxShadow: 24,
    px: 2,
    py: 2,
};

const dataPortfolio: any = {
    marketing: [
        {
            id: "1",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
        {
            id: "2",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
        {
            id: "3",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
        {
            id: "4",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
        {
            id: "5",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
    ],
    contentCreation: [
        {
            id: "1",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
    ],
    web: [
        {
            id: "1",
            title: "Hola",
            coverImage: "",
            images: ["", "", ""],
        },
    ],
};

export default function ColorTabs() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [modalData, setModalData]: any = React.useState({});

    const handleOpen = (id: string, type: string) => {
        setModalData(dataPortfolio[type].find((data: any) => data.id === id));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header title='PORTAFOLIO' titleBreadcrumb='Portafolio' />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='child-modal-title'
                aria-describedby='child-modal-description'>
                <Card variant='outlined' sx={style}>
                    <CardHeader
                        action={
                            <IconButton onClick={handleClose}>
                                <i className='fas fa-times' />
                            </IconButton>
                        }
                        title={modalData.title}
                    />
                    <CardContent></CardContent>
                </Card>
            </Modal>
            <div className='flex flex-col items-center'>
                <p className='p-4 md:p-16'>
                    En este espacio te mostramos un poco de
                    <strong> nuestro trabajo y experiencia </strong>
                    gracias a los viajeros que se subieron a nuestro cohete
                    versión 4.0: Sky Red.
                </p>
            </div>
            <Box className='px-4 md:px-32 pb-16 min-w-full'>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                        variant='scrollable'
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
                    {dataPortfolio.marketing.map((data: { id: string; title: string }) => (
                        <button
                            type='button'
                            onClick={() => handleOpen(data.id, "marketing")}
                            key={data.title}
                            className='flex flex-col w-full space-y-2 items-center text-center hover:scale-105'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>{data.title}</p>
                        </button>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {dataPortfolio.contentCreation.map((data: { id: string; title: string }) => (
                        <button
                            type='button'
                            onClick={() => handleOpen(data.id, "contentCreation")}
                            key={data.title}
                            className='flex flex-col w-full space-y-2 items-center text-center hover:scale-105'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>{data.title}</p>
                        </button>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {dataPortfolio.web.map((data: { id: string; title: string }) => (
                        <button
                            type='button'
                            onClick={() => handleOpen(data.id, "web")}
                            key={data.title}
                            className='flex flex-col w-full space-y-2 items-center text-center hover:scale-105'>
                            <div className='bg-gray-300 w-full h-32'></div>
                            <p>{data.title}</p>
                        </button>
                    ))}
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
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8'>
                    {children}
                </div>
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
