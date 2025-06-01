import Animation from "../Components/initialAnim.jsx";
import React from "react";
import "../../src/index.css";
import TextBox from "../Components/InitPageTextBlocks.jsx"; // Ensure this path is correct and the component is implemented properly
function AboutUs(){
   return  <Animation>
            <div>
    <div className="h-8"></div>
    <TextBox title="Global Health Literacy Outreach (GHLO)" text="We are a non-profit organization dedicated to improving health literacy worldwide. Our mission is to empower individuals and communities with the knowledge and skills they need to make informed health decisions." />
    <TextBox title="Our Vision" text="We envision a world where everyone has access to accurate health information and the ability to understand and use it effectively." />
    <TextBox title="Our Mission" text="Our mission is to promote health literacy through education, advocacy, and community engagement. We strive to create a healthier world by ensuring that everyone has the tools they need to navigate the complex healthcare landscape." />
    <TextBox title="Our Values" text="We believe in the power of knowledge, collaboration, and compassion. We are committed to transparency, integrity, and respect for all individuals and communities." />

  
</div>
    </Animation>
}
export default AboutUs;
