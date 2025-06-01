import React from 'react';
import Animation from "../Components/initialAnim.jsx";
import Photos from "../Components/teamphotos.jsx"

const OurTeam = () => {
    return (
        <Animation>
            <div className="text-center mt-5">
                <h1 className="text-2xl font-bold">Our Team</h1>
                <p className="mt-4 bg-blue-500 text-white p-2">
                    GHLO team is a set of ambition-driven individuals passionate about spreading health literacy.
                    We consist of a several teams, each with its own unique focus and expertise.
                    Together, we work towards our mission of improving health literacy and making a positive impact in the world.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <Photos name="Cindy Li" role="Executive Director" img="Website/ghlo/public/AssetsCode/GHLO Branding (4) (1).png" email="jdk" />
    <Photos name="Jane Smith" role="TeamMember" img="Website/ghlo/public/AssetsCode/GHLO Branding (4) (2).png" email="jvm" />
    <Photos name="Alice Johnson" role="TeamMember" img="Website/ghlo/public/AssetsCode/GHLO Branding (4) (3).png" email="JIT" />
    <Photos name="Bob Brown" role="TeamMember" img="Website/ghlo/public/AssetsCode/GHLO Branding (4) (4).png" email="maven"/>
</div>
            </div>
        </Animation>
    );
};

export default OurTeam;