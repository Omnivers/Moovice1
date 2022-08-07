import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import failLoad from '../images/failLoad.png'
import YouTube from "react-youtube";

//Firstable we want to get the ID of the Card so let's console log our ID from card click.
function Description(){
    // We can also get the ID from our localStorage i guess as 'clicked_Description'
    // To avoid a 5 Mo localStorage we will just use the ID from {console.log(useParams())}
    const [movie,setMovie]=useState() //Movie
    const [trailer,setTrailer]=useState() // Trailer of the movie since there's an Aray of obj to get into
    const [videoPlayer,setVideoPlayer]=useState(false) // To show <Youtube /> 
    const selected=useParams()// To get our ID from the main click
    const IMAGE_PATH="https://image.tmdb.org/t/p/w1280" //Conversion of background Img


    //Fetching our API
    const fetchData =async()=>{
        const request=await fetch(`https://api.themoviedb.org/3/movie/${selected.id}?api_key=f7e05047484d6ec018591df8216ff84e&append_to_response=videos`)
        const response=await request.json()
        setMovie(response)
    }
    // Component did amount
    useEffect(()=>{
        fetchData();
         // eslint-disable-next-line
    },[])

    //To set our trailer and render our <Youtube />
    const playTrailer =()=>{
        setTrailer(movie.videos.results[movie.videos.results.length-1])
        setVideoPlayer(true)
    }

    // Console log tester
    // const test =()=>{
    //     console.log(movie)
    // }
    return(
        <>
    {!movie?(
        <h1 className="title">Loading...</h1>
    ):(
        <div className="description" style={{backgroundImage: `linear-gradient(rgba(0,0,0), rgba(0,0,0,0.3)), url("${IMAGE_PATH}${movie.backdrop_path}")`}}>
        {!movie.poster_path?(
            <div className="overlay">
            <img src={failLoad} className="card-img-top" alt={movie.title} />
            </div>
        ):(
        <div className="overlay">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top mb-3" alt={movie.title} />
        {videoPlayer&&
        <YouTube videoId={trailer.key} />}
        <button onClick={playTrailer} className="trailer learn-more">
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="trailer-text">Watch trailer</span>
        </button>  
        </div>
        )}
        <h1 className="title">{movie.original_title}</h1>
        <div className="">
        {movie.genres.map(genre=>(
            <button key={genre.name} className="genre">{genre.name}</button>
            ))}
        </div>
        <p className="">{movie.overview}</p>
        <div className="info">
        <section className="informations"><span>Statut : </span>{movie.status}</section>
        <section className="informations"><span>Date of release : </span>{movie.release_date?(movie.release_date):("Unknown")}</section>
        <section className="informations"><span>Reviews : </span>{movie.vote_average}</section>
        </div>
        {/* {Function to test consolelogs.} */}
        {/* <button onClick={test}>CLICK ME</button> */}
        </div>
    )}
    </>
    )
}
export default Description