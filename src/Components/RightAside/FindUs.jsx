import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className=''>
            <h2 className='font-bold text-xl mb-4'>Find Us On</h2>
            <div className="join join-vertical w-full ">
                <button className="btn bg-white join-item justify-start"><FaFacebook></FaFacebook> facebook</button>
                <button className="btn bg-white join-item justify-start"><FaTwitter></FaTwitter> twitter</button>
                <button className="btn bg-white join-item justify-start"><FaInstagram></FaInstagram> instagram</button>
            </div>
        </div>
    );
};

export default FindUs;