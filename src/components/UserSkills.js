// filename: UserSkills.js

import React from "react";
import UserTech from "./UserTech";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPersonBiking,
    faPersonRunning,
    faPersonWalking,
    faChild,
} from "@fortawesome/free-solid-svg-icons";

import "./UserSkills.css";

const UserSkills = ({ data }) => {
    const handleModal = (strength) => {
        // Maneja lo que quieras hacer al abrir el modal aquí
        // Por ahora lo dejaremos vacío ya que tu código no muestra una funcionalidad de modal completa
    };

    return (
        <div className="userSkills">
            <h3>Skills and interests:</h3>
            <ul className="skillsLevel">
                <li>
                    <FontAwesomeIcon icon={faPersonBiking} /> Master
                    <UserTech
                        level="master"
                        data={data}
                        handleModal={handleModal}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faPersonRunning} /> Expert
                    <UserTech
                        level="expert"
                        data={data}
                        handleModal={handleModal}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faPersonRunning} /> Proficient
                    <UserTech
                        level="proficient"
                        data={data}
                        handleModal={handleModal}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faPersonWalking} /> Beginner
                    <UserTech
                        level="novice"
                        data={data}
                        handleModal={handleModal}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faChild} /> No experience, but
                    interested
                    <UserTech
                        level="no-experience-interested"
                        data={data}
                        handleModal={handleModal}
                    />
                </li>
            </ul>
        </div>
    );
};

export default UserSkills;
