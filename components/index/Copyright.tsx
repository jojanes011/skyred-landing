import Link from "next/link";

const Copyright = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-2 space-y-2 md:space-y-0 space-x-0 md:space-x-6 break-words text-center'>
            <div>
                <span>2022 by Sky Red Marketing S.A.S All Rights Reserved</span>
            </div>
            <div>
                <Link passHref href='/'><span className="underline cursor-pointer text-primary">Politicas de privacidad</span></Link>
                <Link passHref href='/'><span className="underline cursor-pointer text-primary"> | Sitemap</span></Link>
            </div>
        </div>
    );
};

export default Copyright;
