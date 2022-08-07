import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Firstable we want to get the ID of the Card so let's console log our ID from card click.
function Description(){
    // We can also get the ID from our localStorage i guess as 'clicked_Description'
    // To avoid a 5 Mo localStorage we will just use the ID from {console.log(useParams())}
    const [movie,setMovie]=useState()
    const selected=useParams()

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
    <h1 className="title">DESRIPTION</h1>
    <button onClick={test}>CLICK ME</button>
    </>
    )
}
export default Description