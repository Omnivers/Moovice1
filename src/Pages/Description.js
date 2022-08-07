import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import failLoad from '../images/failLoad.png'
import YouTube from "react-youtube";

//Firstable we want to get the ID of the Card so let's console log our ID from card click.
function Description(){
    // We can also get the ID from our localStorage i guess as 'clicked_Description'
    // To avoid a 5 Mo localStorage we will just use the ID from {console.log(useParams())}
    const [movie,setMovie]=useState()
    const selected=useParams()
    const IMAGE_PATH="https://image.tmdb.org/t/p/w1280"

    const fetchData =async()=>{
        const request=await fetch(`https://api.themoviedb.org/3/movie/${selected.id}?api_key=f7e05047484d6ec018591df8216ff84e`)
        const response=await request.json()
        setMovie(response)
    }
    useEffect(()=>{
        fetchData();
         // eslint-disable-next-line
    },[])
    const test =()=>{
        console.log(movie)
    }
    return(
        <>
    {!movie?(
        <h1 className="title">Loading</h1>
    ):(
        <div className="description" style={{backgroundImage: `linear-gradient(rgba(0,0,0), rgba(0,0,0,0.3)), url("${IMAGE_PATH}${movie.backdrop_path}")`}}>
        {!movie.poster_path?(
            <div className="overlay">
            <img src={failLoad} className="card-img-top" alt={movie.title} />
            </div>
        ):(
        <div className="overlay">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
        <button class="trailer learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="trailer-text">Watch trailer</span>
        </button>  
        </div>
        )}
        <h1 className="title">{movie.original_title}</h1>
        <div className="">
        {movie.genres.map(genre=>(
            <button className="genre">{genre.name}</button>
            ))}
        </div>
        <p>{movie.overview}</p>
        <div className="info">
        <section className="informations"><span>Statut : </span>{movie.status}</section>
        <section className="informations"><span>Date of release : </span>{movie.release_date?(movie.release_date):("Unknown")}</section>
        <section className="informations"><span>Reviews : </span>{movie.vote_average}</section>
        </div>
        {/* <button onClick={test}>CLICK ME</button> */}
        </div>
    )}
    </>
    )
}
export default Description