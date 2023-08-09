// filename: Experiences.js

import React, { useContext } from "react";
import "./Experiences.css";
import { AppContext } from "../context/AppContext";

const Experiences = () => {
    const { data } = useContext(AppContext);

    const jobExperiences =
        data?.experiences?.filter((exp) => exp.category === "jobs") || [];
    const educationExperiences =
        data?.experiences?.filter((exp) => exp.category === "education") || [];

    return (
        <div className="experiences">
            <section className="work-experiences">
                <h2>Job Experiences</h2>
                {renderExperiences(jobExperiences)}
            </section>
            <section className="education-experiences">
                <h2>Education</h2>
                {renderExperiences(educationExperiences)}
            </section>
        </div>
    );
};

const renderExperiences = (experiences) => {
    return experiences.map((experience, index) => (
        <div key={index} className="experience">
            <h3>{experience.name}</h3>
            {experience.organizations.map((org, orgIndex) => (
                <div key={orgIndex}>
                    {org.picture ? (
                        <img src={org.picture} alt={org.name} />
                    ) : (
                        <div className="placeholderIcon">⭐</div>
                    )}
                    <p>{org.name}</p>
                </div>
            ))}
            <h4>Responsibilities:</h4>
            <ul>
                {experience.responsibilities.map((responsibility, resIndex) => (
                    <li key={resIndex}>{responsibility}</li>
                ))}
            </ul>
            <p>
                From: {experience.fromMonth} {experience.fromYear} to
                {experience.toMonth
                    ? ` ${experience.toMonth} ${experience.toYear}`
                    : " Present"}
            </p>
        </div>
    ));
};

export default Experiences;
