import React, { Fragment } from "react";

const Film = ({name, url}) => {
    return(
        <>
        <li>
            <a href={url}>{name}</a>
        </li>
        </>

    )
}

export default Film;