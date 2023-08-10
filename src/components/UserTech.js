// filename: UserTech.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./UserTech.css";

const UserTechnologies = ({ level, data, handleModal }) => {
    if (data.strengths) {
        const dataFiltered = data.strengths.filter((strength) => {
            return strength.proficiency === level;
        });

        if (dataFiltered.length === 0) {
            return <p>[Empty]</p>;
        } else {
            return (
                <ul className="userTechnologies">
                    {dataFiltered.map((strength) => (
                        <li key={strength.id}>
                            <button onClick={() => handleModal(strength)}>
                                {strength.name}{" "}
                                {strength.weight !== 0 ? (
                                    <FontAwesomeIcon icon={faWeightHanging} />
                                ) : (
                                    ""
                                )}{" "}
                                {strength.weight !== 0
                                    ? strength.weight.toFixed(1)
                                    : ""}
                            </button>
                        </li>
                    ))}
                </ul>
            );
        }
    }
    return null;
};

UserTechnologies.propTypes = {
    level: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired,
};

export default UserTechnologies;
