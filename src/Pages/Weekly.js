import moment from 'moment';
import { useEffect,useState } from 'react';
import Card from '../components/Card';
const Weekly = () => {
  const [movies,setMovies]=useState([])
  const API_KEY='f7e05047484d6ec018591df8216ff84e'
  const toDay=moment().format("YYYY-MM-DD")
  const  weekAgo=moment().subtract(7, 'd').format("YYYY-MM-DD");
  const fetchData=async ()=>{
    const request= await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${weekAgo}&primary_release_date.lte=${toDay}&api_key=${API_KEY}`)
    const response= await request.json()
    setMovies(response.results)
  }
  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  },[])
  return (
    <>
    <div className="justify-content-center row m-5">
    {movies.map(movie=>(
      <Card key={movie.title} movie={movie} movies={movies} stars={movie.vote_average}/>
    ))}
    </div>
    </>
  )
  }
  
  export default Weekly