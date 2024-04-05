import { createContext, useState } from "react";

export const UserContext = createContext();

function Context(props) {
    const [users, setUser] = useState([
        { id: 0, name: "John", mail: "john@gmail.com" },
        { id: 1, name: "Prashant", mail: "Prashant@gmail.com" },
        { id: 2, name: "Nisha", mail: "Nisha@gmail.com" },
    ]);
    return (
        <UserContext.Provider value={{ users, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default Context;
