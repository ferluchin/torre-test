// filename: Person.js
import React, { useContext } from "react";
import "./Person.css";
import { AppContext } from "../context/AppContext";
import UserSkills from "./UserSkills";
import "font-awesome/css/font-awesome.min.css";

const Person = () => {
    const { data } = useContext(AppContext);
    const personData = data?.person || {};

    return (
        <>
            <div className="person">
                <h2 className="headline">Details </h2>

                <section className="person-profile">
                    <img
                        src={personData.pictureThumbnail || personData.picture}
                        alt={personData.name}
                        className="person-image"
                    />
                    <h2>{personData.name}</h2>
                    <h3>{personData.professionalHeadline}</h3>

                    <p>{personData.summaryOfBio}</p>

                    <UserSkills data={data} />
                    <p>Location: {personData.location?.name}</p>
                    <ul className="person-links">
                        {personData.links?.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.address}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                  
                                    {link.name.toLowerCase() === "github" ? (
                                        <i className="fa fa-github"></i>
                                    ) : link.name.toLowerCase() ===
                                      "linkedin" ? (
                                        <i className="fa fa-linkedin"></i>
                                    ) : null}
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Person;
