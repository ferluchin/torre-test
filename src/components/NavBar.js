// filename: NavBar.js
import "./NavBar.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const NavBar = ({ setLoading }) => {
    const [search, setSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [newUser, setNewUser] = useState("");
    const { fetchData } = useContext(AppContext);

    const handleSearch = () => {
        if (inputValue === "") return; // No hacer nada si el input está vacío
        setNewUser(inputValue); // Establecer el valor de newUser para la búsqueda
        setSearch(false); // Cerrar la búsqueda
    }

    useEffect(() => {
        if (newUser === "") return; // Skip fetching if no user name is provided

        setLoading(true);
        fetchData(newUser)
            .then(() => setLoading(false))
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [newUser, fetchData, setLoading]); // Added dependencies

    return (
        <nav className="navBar flex">
            <div className="flex">
                <FontAwesomeIcon className="cursor" icon={faBars} />
                <h1>
                    torre<span className="textYellow weightNormal">.co</span>
                </h1>
            </div>
            {!search ? (
                <div className="flex">
                    <FontAwesomeIcon
                        className="cursor"
                        aria-label="Search"
                        onClick={() => setSearch(true)}
                        icon={faSearch}
                    />
                    <a
                        className="textYellow weightLight"
                        href="https://torre.co/?r=eJTS6tfg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SIGN IN
                    </a>
                </div>
            ) : (
                <div className="newUser flex">
                    <input
                        className="search"
                        type="text"
                        placeholder="New user"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <ul className="searchButtons">
                        <FontAwesomeIcon
                            className="cursor"
                            aria-label="Search"
                            onClick={handleSearch} // Usar handleSearch al hacer clic
                            icon={faSearch}
                        />
                        <FontAwesomeIcon
                            className="cursor"
                            aria-label="Close search"
                            onClick={() => {
                                setInputValue(""); // Resetear el input
                                setSearch(false);
                            }}
                            icon={faClose}
                        />
                    </ul>
                </div>
            )}
        </nav>
    );
};

NavBar.propTypes = {
    setLoading: PropTypes.func.isRequired,
};

export default NavBar;
