import { useState,useEffect} from "react"
import Card from "../components/Card"

function Favorites(){
  const [movies,setMovies]=useState([])
  
  const fetchFavorites = async()=>{
    const localFavorites=localStorage.getItem("favoritesIds")
    const favoritesIds=JSON.parse(localFavorites)
    const promises=favoritesIds.map(ID=>{
      return fetchData(ID)
    })
    const resolvedPromises= await Promise.all(promises)
    setMovies(resolvedPromises) // SETMOVIEEEEEES !!!
  }
  const fetchData = async(ID)=>{
      const request=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=f7e05047484d6ec018591df8216ff84e`)
      const response=await request.json()
      return(response) 
    };

  useEffect(()=>{
    fetchFavorites()
    // eslint-disable-next-line
  },[])
  

  return(
    <>
      {movies.length===0?(
      <h1 className="text-light d-flex justify-content-center ">You have no Favorites movies yet !</h1>
      ):(
      <div className="justify-content-center row m-5">
      {movies.map(movie=>(
      <Card key={movie.title} movie={movie} movies={movies} fetchFavorites={fetchFavorites} stars={movie.vote_average}/> 
      ))}
      </div>
      )}
    </>
)}
export default Favorites;