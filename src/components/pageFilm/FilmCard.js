import React from 'react'
import './FilmCard.css'

const FilmCard = ({title, year, src}) => {



        return (
            <div className="cardFilm">
                <div className="imageFilm">
                    <img src={src} alt="monster"></img>
                </div>
                <hr></hr>
                <p>{title}</p>
                <p>{year}</p>
            </div>
        )
    }


export default FilmCard