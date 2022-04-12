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
import Image from "next/image";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    borderRadius: "10px",
    border: "4px solid #E85A4D",
    boxShadow: 24,
    px: 2,
    py: 2,
};

const dataPortfolio: any = {
    marketing: [
        {
            id: "1",
            title: "Elite Grupo Maya",
            coverImage: "",
            images: [
                "/img/portfolio/elite-grupo-maya.jpg",
                "/img/clients/maya.png",
            ],
        },
        {
            id: "2",
            title: "Encactus de Suculentas",
            coverImage: "",
            images: [
                "/img/portfolio/encactus-de-suculentas.jpg",
                "/img/clients/encactus.png",
            ],
        },
        {
            id: "3",
            title: "IPAO Boutique",
            coverImage: "",
            images: [
                "/img/portfolio/ipao-boutique.jpg",
                "/img/clients/ipao.png",
            ],
        },
        {
            id: "4",
            title: "JA CASTILLO",
            coverImage: "",
            images: [
                "/img/portfolio/ja-castillo.jpg",
                "/img/clients/castillo.png",
            ],
        },
        {
            id: "5",
            title: "Sinay Store",
            coverImage: "",
            images: [
                "/img/portfolio/sinay-store.jpg",
                "/img/clients/sinay.png",
            ],
        },
        {
            id: "6",
            title: "Soluciones Exactas Precitop",
            coverImage: "",
            images: [
                "/img/portfolio/soluciones-exactas-precitop.jpg",
                "/img/clients/precitop.png",
            ],
        },
        {
            id: "7",
            title: "Uno Arepa",
            coverImage: "",
            images: ["/img/portfolio/uno-arepa.jpg", "/img/clients/uno.png"],
        },
    ],
    contentCreation: [],
    web: [],
};

const myLoader = (src: string) => {
    return `http://localhost:3000${src}`;
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
            {open ? (
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
                            titleTypographyProps={{fontWeight: '600', color: '#E85A4D'}}
                            title={modalData.title}
                        />
                        <CardContent>
                            <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 items-center justify-around'>
                                <Image
                                    alt={modalData.images[0]}
                                    src={modalData.images[0]}
                                    loader={() => myLoader(modalData.images[0])}
                                    width={200}
                                    height={400}
                                    className='relative'
                                />
                                <Image
                                    alt={modalData.images[1]}
                                    src={modalData.images[1]}
                                    loader={() => myLoader(modalData.images[1])}
                                    width={250}
                                    height={250}
                                    className='relative'
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Modal>
            ) : (
                <></>
            )}
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
                            label='Branding'
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
                    {dataPortfolio.marketing.map(
                        (data: {
                            id: string;
                            title: string;
                            images: Array<any>;
                        }) => (
                            <button
                                type='button'
                                onClick={() => handleOpen(data.id, "marketing")}
                                key={data.title}
                                className='flex flex-col w-full space-y-2 mt-4 md:mt-0 items-center text-center hover:scale-105'>
                                <div className='relative w-56 h-44'>
                                    <Image
                                        alt={data.images[0]}
                                        src={data.images[0]}
                                        layout='fill'
                                        objectFit='cover'
                                        className='relative'
                                    />
                                </div>
                                <p>{data.title}</p>
                            </button>
                        )
                    )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {dataPortfolio.contentCreation.map(
                        (data: {
                            id: string;
                            title: string;
                            images: Array<any>;
                        }) => (
                            <button
                                type='button'
                                onClick={() =>
                                    handleOpen(data.id, "contentCreation")
                                }
                                key={data.title}
                                className='flex flex-col w-full space-y-2 items-center text-center hover:scale-105'>
                                <div className='relative w-56 h-44'>
                                    <Image
                                        alt={data.images[0]}
                                        src={data.images[0]}
                                        layout='fill'
                                        objectFit='cover'
                                        className='relative'
                                    />
                                </div>
                                <p>{data.title}</p>
                            </button>
                        )
                    )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {dataPortfolio.web.map(
                        (data: {
                            id: string;
                            title: string;
                            images: Array<any>;
                        }) => (
                            <button
                                type='button'
                                onClick={() => handleOpen(data.id, "web")}
                                key={data.title}
                                className='flex flex-col w-full space-y-2 items-center text-center hover:scale-105'>
                                <div className='relative w-56 h-44'>
                                    <Image
                                        alt={data.images[0]}
                                        src={data.images[0]}
                                        layout='fill'
                                        objectFit='cover'
                                        className='relative'
                                    />
                                </div>
                                <p>{data.title}</p>
                            </button>
                        )
                    )}
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
