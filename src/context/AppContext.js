// filename: AppContext.js
import React, { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [currentUser, setCurrentUser] = useState("lgrandab"); // Nuevo estado para rastrear el usuario actual

    const proxyUrl = "https://proxy-torre.fly.dev/api/bios/";

    const fetchData = async (username) => {
        // Verificar si el usuario ya ha sido buscado
        if (username === currentUser) {
            return data;
        }

        try {
            const user = username || "lgrandab";
            const response = await axios.get(`${proxyUrl}${user}`);
            console.log("Raw Axios response:", response);
            setData(response.data);
            setCurrentUser(user); // Actualizar el estado del usuario actual

            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            setData({ person: null });

            throw error;
        }
    };

  
    return (
        <AppContext.Provider value={{ data, fetchData }}>
            {children}
        </AppContext.Provider>
    );
};
