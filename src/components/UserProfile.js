//filename: UserProfile.js
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Experiences from "./Experiences";
import Person from "./Person";
import NavBar from "./NavBar";

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
            <NavBar setLoading={setLoading} />

            {loading ? (
                "Loading..."
            ) : (
                <div className="userProfileContainer">
                    <div className="UserProfile">
                        {/* <div className="UserDetails"> */}
                        <div
                            className="UserDetails"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <h2>{data?.person?.name}</h2>
                            <p>{data?.person?.bio}</p>
                            <h3>Stats 📊</h3>
                            <p>
                                <strong>Jobs 💼 :</strong> {data?.stats?.jobs}
                                <strong> Education 🎓 :</strong>
                                {"  "}
                                {data?.stats?.education}
                                <strong> Strengths 💪 :</strong>
                                {"  "}
                                {data?.stats?.strengths}
                            </p>
                        </div>
                        <div className="ProfileDetails">
                            <Person data={data} />

                            <Experiences data={data} />
                        </div>
                        <div className="showMoreButton"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
