import { useState,useEffect} from "react"

function Favorites(){
  const [movies,setMovies]=useState([])
  const localFavorites=localStorage.getItem("favoritesIds")
  const favoritesIds=JSON.parse(localFavorites)

  const fetchData =()=>{
    favoritesIds.forEach(async (ID) => {
      const request=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=f7e05047484d6ec018591df8216ff84e`)
      const response=await request.json()
      setMovies([...movies,response])
    });
  }
  useEffect(()=>{
    fetchData()
  },[])
  const test=()=>{
    console.log(movies)
  }

  return(
    <>
    <h1>Favorites :</h1>
    <button onClick={test} >Click !</button>
    </>
)}

export default Favorites