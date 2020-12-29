import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'
import Pelicula from '../components/pelicula';
import Base from '../components/base';
import ActiveLink from './activeLink'
import axios from 'axios';


/**
 Usar getStaticProps cuando.
Los datos necesarios para representar la página están disponibles
en el momento de la compilación antes de la solicitud del usuario.
Los datos provienen de CMS sin cabeza.
Los datos pueden almacenarse en caché públicamente (no son específicos del usuario).
La página debe ser renderizada previamente (para SEO) y ser muy rápida: 
getStaticProps genera archivos HTML y JSON,
los cuales pueden ser almacenados en caché por un CDN para el rendimiento.
 */
export async function getStaticProps(query) {

  const pagina = query.pagina ? Number(query.pagina) : 1;
  const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=2da6ba8a&s=batman&page=$1`)
  const peliculas = respuesta.data.Search;
  return {
    props: {
      peliculas,
      pagina
    }
  }

}



const App = ({ props, router }) => {
  console.log("estos son los props que llegan", props);
  console.log("Router", router);
  const [pagina, guardarPagina] = useState(1);
  const [peliculas, guardarPeliculas] = useState(null);

  const anterior = () => {
    const an = pagina - 1;
    guardarPagina(an)
  }
  const siguiente = () => {
    const si = pagina + 1;
    guardarPagina(si)
  }


  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await axios.get(`http://www.omdbapi.com/?apikey=2da6ba8a&s=batman&page=${pagina}`)
      const peliculas = respuesta.data.Search
      guardarPeliculas(peliculas);
    }
    consultarAPI()
  }, [pagina])

  const renderPaginacion = () => {
    const Anterior = pagina > 1 ?
      <button onClick={() => anterior()}><span>ANTERIOR</span></button> :
      null;

    return (
      <div className="control">
        {Anterior}
        <button onClick={() => siguiente()}><span>SIGUIENTE</span></button>

        <style jsx global>{`
        .control {
          text-align: center; 
        }
      .control button {
        margin-left: 1rem;
        background-color: #347cfa;
        color: white;
        border-radius: 10px;
        font-size: 20px;
        border: 1px solid black;
      }
    `}</style>
      </div>
    )
  }
  if (!peliculas) return null;
  return (
    <Base>
      <Head>
        <title>APPMOVIES!!</title>
      </Head>
      <div className="containerNav">
        <nav>
          <ul className="items">
            <li><Link href="/"><a>Inicio</a></Link></li>
            <li><Link href="/inicio"><a>Series</a></Link></li>
            <li><Link href="/documentales"><a>Documentales</a></Link></li>
          </ul>
        </nav>
        <style jsx>
          {
            `
            text-align: center;
            .items {
              inherit: none;
              display: flex;
              flex-direction: rows;
              justify-content: right;
          }
          .items li {
              inherit: none;
              margin: 10px;
              padding: 5px;
              list-style: none;
              background: black;
              border: solid 1px black;
              border-radius: 10px;
          }
          .items a {
            text-decoration: none;
            color: white;
          }
          `

          
          }
        </style>
      </div>
      <ActiveLink href="/inicio">
        colombia
      </ActiveLink>
      <div>
        {!peliculas ? null : (

          <div className="peliculas">
            {Array.isArray(peliculas) && peliculas.map((p) => <Pelicula {...p} />)}
            <style jsx>{`
            .peliculas {
              display: flex;
              flex-wrap: wrap;
              justify-content:center;
              padding-bottom: 2rem;
              padding-top: 2rem;
            }
           `}

            </style>
          </div>
        )}

        {renderPaginacion()}
      </div>
    </Base>
  )


}
export default withRouter(App);