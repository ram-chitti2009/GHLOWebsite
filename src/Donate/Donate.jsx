import React from 'react';
import Animation from "../Components/initialAnim.jsx";

const Donate = () => {
    return (
        <Animation>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-2xl font-bold mb-4">Please Donate</h1>
                <p className="mb-2">Your support helps us continue our mission of promoting health literacy.</p>
                <p className="mb-6">To make a donation, please click on the button below</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Donate Now
                </button>
            </div>
        </Animation>
    );
};

export default Donate;