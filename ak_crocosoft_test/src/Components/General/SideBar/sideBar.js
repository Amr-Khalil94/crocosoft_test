//react
import React from "react";

//dom route
import { Outlet, useNavigate } from "react-router-dom";

export default () => {
    //verify dom route
    const navigate = useNavigate();
    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h1>About</h1>
                <button onClick={() => {
                    navigate(`quiz/22`)
                }}>Create</button>

            </div>
            <Outlet />
        </div>
    )
}