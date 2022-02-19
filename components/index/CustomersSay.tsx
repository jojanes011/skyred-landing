import Image from "next/image";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";

interface CustomersSayInterface {
    key: Number;
    name: String;
    image: string;
    comment: String;
    rating: number;
    title: String;
}

const CustomersSay = ({
    key = 0,
    name = "",
    image = "",
    comment = "",
    rating = 0,
    title = "",
}: CustomersSayInterface) => {
    const [showId, setShowId] = useState(0);

    const nextId = () => {
        setShowId(showId + 1);
    };

    const previewId = () => {
        setShowId(showId - 1);
    };

    const ratingChanged = (newRating: any) => {
        console.log(newRating);
    };

    return (
        <div className='flex flex-col items-center py-8 space-y-2'>
            <h2 className='title'>Qué dicen nuestros clientes</h2>
            {/* <div className='w-full flex flex-row space-x-10 justify-center place-items-center'> */}
            {/* <div>
                    <button type='button' onClick={previewId}>
                        <i className='fas fa-arrow-left'></i>
                    </button>
                </div> */}
            <div className='flex flex-row space-x-4 w-1/2 items-center'>
                <div className='flex flex-col space-y-1 text-center'>
                    <div className='relative bg-gray-400 w-24 h-24 rounded-full'>
                        <Image
                            src={image}
                            alt='profile'
                            layout='fill'
                            className='rounded-full'
                        />
                    </div>
                    <span className='font-light text-sm'>{name}</span>
                </div>
                <div className='text-sm text-left'>
                    <h5 className='font-bold'>{title}</h5>
                    <p className='text-left'>{comment}</p>
                    <Rating
                        name='simple-controlled'
                        value={rating}
                        //   onChange={(event, newValue) => {
                        //     setValue(newValue);
                        //   }}
                    />
                </div>
            </div>
            {/* <div>
                    <button type='button' onClick={nextId}>
                        <i className='fas fa-arrow-right'></i>
                    </button>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default CustomersSay;
