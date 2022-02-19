import React from "react";

const Accost = () => {
    return (
        <div className='flex flex-row justify-center py-2'>
            <input type='text' className='w-2/3 md:w-1/4 rounded-sm shadow px-2 py-1' placeholder="tucorreo@mail.com" />
            <button type='button' className='btn-transparent-square'>
                Abordar
            </button>
        </div>
    );
};

export default Accost;
