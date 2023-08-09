//filename: UserProfile.js
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

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

                        {/* Add more fields from the data object as required. */}
                    </div>
                    <div className="showMoreButton">
                        {/* Icon or Button to show more */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
