import React from 'react';
import "../../src/index.css";
import Animation from "../Components/initialAnim.jsx";
import TextBox from "../Components/InitPageTextBlocks.jsx";

function OurInit() {
    return (
        <Animation classes="text-4xl font-bold text-green-600 p-4 md:p-10 text-center">
            <h1>Our Initiatives</h1>
            <p className="text-xl text-gray-700 mt-4 px-2 md:px-0">
                We are committed to making a difference in the world through our various initiatives.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 w-full max-w-7xl mx-auto px-4 py-6">
                <TextBox title="Community Engagement" text="We actively engage with local communities to understand their needs and provide support."/>
                <TextBox title="Sustainability" text="We prioritize sustainable practices in all our operations to protect the environment."/>
                <TextBox title="Education" text="We actively engage with local communities to understand their needs and provide support."/>
                <TextBox title="Healthcare" text="We actively engage with local communities to understand their needs and provide support."/>
            </div>
        </Animation>
    );
}
export default OurInit;