import React, { useContext } from "react";
import UserDetails from "./UserDetails";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";

function User() {
    const { users, setUser } = useContext(UserContext);
    return (
        <div className="mt-5 w-1/2 m-auto">
            <h1 className="text-3xl">User List</h1>
            <div className="mt-5 w-1/3 flex flex-col gap-3">
                {users.map((u, index) => (
                    <Link
                        to={`/user/${u.id}`}
                        key={u.id}
                        className="px-3 py-2 text-center rounded-md bg-green-400"
                    >
                        {u.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default User;
