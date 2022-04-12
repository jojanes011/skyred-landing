/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap'
                    rel='stylesheet'></link>
                <title>Sky Red Marketing</title>
            </Head>
            <script
                src='https://kit.fontawesome.com/a748e3d83e.js'
                crossOrigin='anonymous'></script>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
