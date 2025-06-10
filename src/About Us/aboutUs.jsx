import Animation from "../Components/initialAnim.jsx";
import React from "react";
import "../../src/index.css";
import TextBox from "../Components/InitPageTextBlocks.jsx"; // Ensure this path is correct and the component is implemented properly
function AboutUs(){
   return  <Animation>
            <div>
    <div className="h-8"></div>
    <TextBox title="Global Health Literacy Outreach (GHLO)" text="Global Health Literacy Outreach (GHLO) is dedicated to fostering increased understanding of health information and enhancing equity in health literacy, especially through the lens of bridging traditional remedies and modern science. Through outreach and communication, we aim to establish connections with health professionals and raise awareness of crucial health information. 
" />
    <TextBox title="Our Vision" text="GHLO envisions creating a community through outreach where the understanding and communication of health is strengthened, leading towards a more informed and healthier society.
" />
    <TextBox title="Our Mission" text="To raise awareness of health literacy and work towards achieving equity in health information. We strive to establish a robust community and facilitate communication between health professionals and the general public and build connections between traditional remedies and modern science.
" />
    <TextBox title="Our Values" text="We believe in the power of knowledge, collaboration, and compassion. We are committed to transparency, integrity, and respect for all individuals and communities." />

  
</div>
    </Animation>
}
export default AboutUs;
