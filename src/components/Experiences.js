// filename: Experiences.js

import React, { useContext } from "react";
import './Experiences.css';
// Assuming you're importing the same context
import { AppContext } from "../context/AppContext";

const Experiences = () => {
    const { data } = useContext(AppContext);

    return (
        <div className="experiences">
            <h2>Experiences</h2>

            {data?.experiences?.map((experience, index) => (
                <div key={index} className="experience">
                    <h3>{experience.name}</h3>

                    {experience.organizations.map((org, orgIndex) => (
                        <div key={orgIndex}>
                            <img src={org.picture} alt={org.name} />
                            <p>{org.name}</p>
                        </div>
                    ))}

                    <h4>Responsibilities:</h4>
                    <ul>
                        {experience.responsibilities.map(
                            (responsibility, resIndex) => (
                                <li key={resIndex}>{responsibility}</li>
                            )
                        )}
                    </ul>

                    <p>
                        From: {experience.fromMonth} {experience.fromYear}
                    </p>
                    {experience.toMonth && (
                        <p>
                            To: {experience.toMonth} {experience.toYear}
                        </p>
                    )}

                    {/* Add more fields as required */}
                </div>
            ))}
        </div>
    );
};

export default Experiences;
