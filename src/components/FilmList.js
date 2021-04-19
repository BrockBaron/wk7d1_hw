import React from "react";
import Film from "./Film"

const FilmList = ({films}) => {
    
    const filmNodes = films.map((film, index) => {
        return(
            <Film name={film.name} url={film.url} key={index}/>
        )
    })

    return(
        <>
        <ul>{filmNodes}</ul>
        
        </>
    )
}

export default FilmList;