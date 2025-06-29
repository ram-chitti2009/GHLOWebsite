import React from 'react';
import Animation from "../Components/initialAnim.jsx";

const ChapterMap = () => {
  return (
    <Animation>
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Start a Chapter Today!</h1>
      <p className="text-center mt-4 text-black p-2">
        Join us in our mission to spread health literacy and make a difference in your community.
      </p>
      <p className="text-center mt-4 text-black p-2">
        Starting a chapter of GHLO is a great way to make a positive impact in your community. By becoming a chapter leader, you will have the opportunity to lead initiatives that promote health literacy and improve the health of your community. You will also have access to resources and support from GHLO to help you succeed.
      </p>
      <p className="text-center mt-4 text-black p-2">
        If you are interested in starting a chapter of GHLO, please fill out the form below. We will review your application and get back to you as soon as possible.
      </p>

      <div className="flex justify-center my-8">
        <iframe
          src="https://docs.google.com/forms/d/1Qqlt3wlRRfmIehygeT_l5pCZTz7w-Lh2SdEA44pbaWE/viewform?embedded=true"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Start a Chapter Form"
        >
          Loading…
        </iframe>
      </div>
      <div className="flex justify-center mb-8">
      <a
        href="https://docs.google.com/forms/d/100Khx_vKW7sfijZHBbhWXlE0-4seWb6pr03p2GvfBlc/viewform?edit_requested=true"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        Want to Join as a member instead?
      </a>
      </div>

      <h2 className="text-center text-xl font-semibold mt-8 mb-4">Our Chapter Locations</h2>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1uQ-jFYCy8KYuMHMZmGKfr_-y3a_U9Jo&ehbc=2E312F&noprof=1"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="GHLO Chapter Map"
      ></iframe>
    </div>
    
    </Animation>
  );
};

export default ChapterMap;