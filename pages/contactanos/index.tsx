import Link from "next/link";
import React, { useRef } from "react";
import Header from "../../components/Header";
import emailjs from "@emailjs/browser";

const Contactanos = () => {
    const form: any = useRef(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.EMAIL_JS_SERVICE_ID as string,
                "template_ki7iixi",
                form.current,
                process.env.EMAIL_JS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    console.log(process.env.EMAIL_JS_USER_ID)

    return (
        <div>
            <Header title='CONTÁCTANOS' titleBreadcrumb='Contactanos' />
            <div className='flex flex-col md:flex-row md:space-x-8 justify-center items-center px-4 md:px-32 py-8 md:py-16'>
                <div className='flex flex-row space-x-8 md:space-x-0 md:flex-col space-y-0 md:space-y-4 w-full justify-center'>
                    <div className='flex flex-row place-items-center space-x-4 cursor-pointer'>
                        <div className='w-6 text-center'>
                            <i className='fab text-3xl fa-whatsapp mt-1 text-secondary'></i>
                        </div>
                        <Link href='https://wa.link/twk436'>
                            <a target='_blank' className='text-lg hidden md:block'>
                                +57 (315 684 3651)
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-row place-items-center space-x-4'>
                        <div className='w-6 text-center'>
                            <i className='fas text-3xl fa-envelope mt-1 text-secondary'></i>
                        </div>
                        <p className='text-lg hidden md:block'>info@skyredmarketing.com</p>
                    </div>
                    <div className='flex flex-row place-items-center space-x-4 cursor-pointer'>
                        <div className='w-6 text-center'>
                            <i className='fab text-3xl fa-facebook mt-1 text-secondary'></i>
                        </div>
                        <Link href='https://www.facebook.com/skyredmarketing/'>
                            <a target='_blank' className='text-lg hidden md:block'>
                                https://www.facebook.com/skyredmarketing/
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-row place-items-center space-x-4 cursor-pointer'>
                        <div className='w-6 text-center'>
                            <i className='fab text-3xl fa-instagram mt-1 text-secondary'></i>
                        </div>
                        <Link href='https://www.instagram.com/skyredmarketing/'>
                            <a target='_blank' className='text-lg hidden md:block'>
                                https://www.instagram.com/skyredmarketing/
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-row place-items-center space-x-4 cursor-pointer'>
                        <div className='w-6 text-center'>
                            <i className='fab text-3xl fa-tiktok mt-1 text-secondary'></i>
                        </div>
                        <Link href='https://tiktok.com/@skyredmarketing'>
                            <a target='_blank' className='text-lg hidden md:block'>
                                https://tiktok.com/@skyredmarketing
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-row place-items-center space-x-4 cursor-pointer'>
                        <div className='w-6 text-center'>
                            <i className='fab text-3xl fa-linkedin mt-1 text-secondary'></i>
                        </div>
                        <Link href='https://www.linkedin.com/company/sky-red-marketing/'>
                            <a target='_blank' className='text-lg hidden md:block'>
                                https://www.linkedin.com/company/sky-red-marketing/
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 w-full py-4'>
                    <h6 className='text-center subtitle'>
                        Envianos un mensaje
                    </h6>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='flex flex-col space-y-8 w-full items-center'>
                            <div className='w-full'>
                                <p className='font-semibold'>NOMBRE</p>
                                <input
                                    type='text'
                                    name="user_name"
                                    className='w-full rounded-sm shadow px-2 py-1 border border-gray-300'
                                    placeholder='Joan Oviedo'
                                />
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold'>EMAIL</p>
                                <input
                                    type='email'
                                    name='user_email'
                                    className='w-full rounded-sm shadow px-2 py-1 border border-gray-300'
                                    placeholder='tucorreo@mail.com'
                                />
                            </div>
                            <div className='w-full'>
                                <p className='font-semibold'>MENSAJE</p>
                                <textarea
                                    rows={4}
                                    cols={4}
                                    name='message'
                                    className='w-full rounded-sm shadow px-2 py-1 border border-gray-300'
                                    placeholder='Quiero saber mas'
                                />
                            </div>
                            <button
                                type='button'
                                onClick={sendEmail}
                                value='Send'
                                className='btn-primary w-full md:w-1/2'>
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactanos;
