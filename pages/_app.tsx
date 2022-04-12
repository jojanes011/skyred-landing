/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
    const building = false;
    
    return (
        <>
        {building ? (
            <div className='bg-header bg-cover flex flex-col items-center text-center pt-40 space-y-8 h-screen'>
                <Image
                    className="cursor-pointer"
                    width={148}
                    height={42}
                    alt='logo'
                    src='/img/logo.png'
                />
                <h1 className="font-extrabold text-white text-5xl">Estamos en construcción</h1>
                <i className="fas fa-hammer text-white text-5xl" />
            </div>
        ) : (
            <Layout>
            <Component {...pageProps} />
            </Layout>
        )}
    </>
    );
}

export default MyApp;
