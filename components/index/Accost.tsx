import React, { useState } from "react";
import { sendEmail } from "../../utils/functions";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Accost = () => {
    const [email, setEmail] = useState("");

    const emailWelcome = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setEmail("");
        const response = await sendEmail({
            templateParams: { user_email: email },
            templateId: "template_kkv7hup",
        });
        if (response.status === 200) {
            toast.success('¡Éxito!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } else {
            toast.error('¡Ha ocurrido un error!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    };

    return (
        <div className='flex flex-col space-y-2'>
            <div className='flex flex-row justify-center py-2'>
                <input
                    type='text'
                    name='user_email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={{caretColor: 'red'}}
                    className='after:border-secondary w-2/3 md:w-1/4 rounded-sm shadow px-2 py-1 text-black'
                    placeholder='tucorreo@mail.com'
                />
                <button
                    onClick={emailWelcome}
                    disabled={email === ""}
                    type='button'
                    className='btn-transparent-square'>
                    Abordar
                </button>
            </div>
            <ToastContainer
                position='bottom-center'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Accost;
