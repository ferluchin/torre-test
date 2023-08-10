import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({});

    const proxyUrl = "https://proxy-torre.fly.dev/api/bios/";

    const fetchData = useCallback(
        async (username) => {
            try {
                // Default to a specific user if none provided
                const user = username || "lgrandab";
                const response = await axios.get(`${proxyUrl}${user}`);
                console.log("Raw Axios response:", response);
                setData(response.data);

                return response.data;
            } catch (error) {
                console.error("Error fetching data:", error);
                setData({ person: null });

                throw error;
            }
        },
        [setData]
    );

    return (
        <AppContext.Provider value={{ data, fetchData }}>
            {children}
        </AppContext.Provider>
    );
};
