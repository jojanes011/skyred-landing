import Link from "next/link";
import React from "react";
import Header from "../components/Header";

const Error = () => {
    return (
        <div>
            <Header title='Página no encontrada' titleBreadcrumb='404' />
            <div className='flex flex-col space-y-8 items-center py-32'>
                <i className='fas fa-exclamation text-9xl text-secondary'></i>
                <Link href='/'>
                    <button className='btn-primary'>REGRESAR</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
