import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    // console.log(id);
    const navigate = useNavigate();
    return (
        <div className="mt-5 w-1/3 m-auto">
            <h1 className="px-3 w-1/2 py-2 mb-3 text-center rounded-md bg-green-400">
                {users[id].name}
            </h1>
            <h1 className="px-3 w-1/2 py-2 text-center rounded-md bg-purple-400">
                {users[id].mail}
            </h1>
            <button
                onClick={() => navigate(-1)}
                className="px-3 py-1 bg-blue-400 rounded-md mt-3"
            >
                Go back
            </button>
        </div>
    );
}

export default UserDetails;
