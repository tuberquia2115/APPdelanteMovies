import React from 'react';

const Pelicula = ({ Title, Poster, Year, Type }) => {
    return (
        <div className="pelicula">
            <div className="poster"></div>
            <div className="titulo">{Title}</div>
            <div className="description">
                <h4> Año:{Year}</h4>
                <h4> Tipo: {Type}</h4>

            </div>
            <style jsx>{`
            .pelicula {
                height: 300px;
                width: 200px;
                display: flex;
                flex-direction: column;
                margin: 10px; 
            }
            .titulo {
                text-align: center;
                width: 100%;
                opacity: 0.9;
                background black;
                color: white;
                font-size: 20px;
            }

            .poster {
                flex: 1;
                background-image: url(${Poster});
                background-size: cover;
                background-color: black;
            }
            .description {
                display: flex;
                flex-direction: rows;
                color: #364476;
                justify-content: space-around;

            }
            `}

            </style>

        </div>
    )
}
export default Pelicula
