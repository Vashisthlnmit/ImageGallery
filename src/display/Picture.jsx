import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Picture({ url, desp, title, id }) {
    return (
        <>
            <div className="flex flex-wrap ">
                <Link to={`/animal/${id}`}>
                    <div className="flex flex-wrap" >
                        <img src={url} alt={title} className="w-60 h-60 m-4" />
                    </div>
                </Link>
            </div>
        </>
    )
}