import React from 'react'
import './FilmCard.css'

const FilmCard = ({title, year, src}) => {



        return (
            <div className="cardFilm">
                <div className="imageFilm">
                    <img src={src} alt="monster"></img>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{year}</p>
                </div>
                
            </div>
        )
    }


export default FilmCard