import { useEffect, useState } from "react"
import Card from "../components/Card"

const Popular = () => {
  const [movies,setMovies]=useState([])
  const fetchData =async ()=>{
    const request= await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f7e05047484d6ec018591df8216ff84e")
    const response= await request.json()
    setMovies(response.results)
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <>
      <h1>Popular</h1>
      {movies.map(movie => (
          <Card key={movie.title} movie={movie} />
        ))}
  </>
  )
}

export default Popular