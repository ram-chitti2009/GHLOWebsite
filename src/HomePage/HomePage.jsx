import React from 'react';
import Animation from "../Components/initialAnim.jsx";
import "../../src/index.css";
import TextBox from "../Components/InitPageTextBlocks.jsx"; // Ensure this path is correct and the component is implemented properly

function HomePage() {
    return (
        <div className="relative w-full">
            <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:hidden">
                <Animation classes="" style={{ width: '100%' }}>
                    <div className="flex flex-col items-center w-full space-y-8">
                        <img
                            src="/AssetsCode/GHLO Branding (4) (1).png"
                            className="w-40 h-40 sm:w-[25rem] sm:h-[25rem] rounded-full border-4 border-pink-500 shadow-lg object-cover mt-8 mb-4 transform translate-x-4"
                            alt="GHLO Logo"
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 text-center w-full">
                            <span className="block">Where</span>
                            <span className="block">Words</span>
                            <span className="block">Save</span>
                            <span className="block">Lives</span>
                        </h1>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition mt-4 ml-4 w-48 sm:w-64">
                            Donate Now
                        </button>
                    </div>
                </Animation>
            </div>
            <div className="hidden lg:flex flex-col items-center px-16">
                <Animation classes="" style={{ width: '100%' }}>
                    <div className="flex flex-col md:flex-row items-center w-full justify-between space-y-8 md:space-y-0">
                        <img
                            src="/AssetsCode/GHLO Branding (4) (1).png"
                            className="w-72 h-72 lg:w-[25rem] lg:h-[25rem] rounded-full border-4 border-pink-500 shadow-lg object-cover mt-8 mb-8 md:mb-0 -ml-16"
                            alt="GHLO Logo"
                        />
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-pink-500 text-center md:text-right w-full md:w-auto md:ml-32 lg:ml-40">
                            <span className="block">Where</span>
                            <span className="block">Words</span>
                            <span className="block">Save</span>
                            <span className="block">Lives</span>
                        </h1>
                    </div>
                    <div className="h-8"></div>
                    <div className="h-8"></div>
                    <button className="animation-jump bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition ml-8 sm:ml-36 md: ml-3px md:ml-auto md:self-end text-center w-48 sm:w-64">
                        Donate Now
                    </button>
                </Animation>
            </div>
        </div>
    );
}
export default HomePage;