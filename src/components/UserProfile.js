//filename: UserProfile.js
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Experiences from "./Experiences";

import "./UserProfile.css";

const UserProfile = () => {
    const { data, fetchData } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchData("lgrandab")
            .then((response) => {
                console.log("Fetched data:", response); // Add this line
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="userProfile">
            {loading ? (
                "Loading..."
            ) : (
                <div className="UserProfile">
                    <div className="UserDetails">
                        <h2>{data?.person?.name}</h2>
                        <p>{data?.person?.bio}</p>
                        <Experiences data={data} />

                        <h3>Stats</h3>
                        <p>
                            <strong>Jobs:</strong> {data?.stats?.jobs}
                        </p>
                        <p>
                            <strong>Education:</strong> {data?.stats?.education}
                        </p>
                        <p>
                            <strong>Strengths:</strong> {data?.stats?.strengths}
                        </p>

                        {/* morefields if required. */}
                    </div>
                    <div className="showMoreButton"></div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
