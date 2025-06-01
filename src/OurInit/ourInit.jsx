import React from 'react';
import "../../src/index.css";
import Animation from "../Components/initialAnim.jsx";
import TextBox from "../Components/InitPageTextBlocks.jsx";

function OurInit() {
    return (
        <Animation classes="text-4xl font-bold text-green-600 p-10 text-center">
            <h1>Our Initiatives</h1>
            <p className="text-xl text-gray-700 mt-4">
                We are committed to making a difference in the world through our various initiatives.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-auto">
                <TextBox title="Community Engagement" text="We actively engage with local communities to understand their needs and provide support."/>
                <TextBox title="Sustainability" text="We prioritize sustainable practices in all our operations to protect the environment."/>
                <TextBox title="Community Engagement" text="We actively engage with local communities to understand their needs and provide support."/>

                <TextBox title="Community Engagement" text="We actively engage with local communities to understand their needs and provide support."/>

            </div>
        </Animation>
    );
}
export default OurInit;