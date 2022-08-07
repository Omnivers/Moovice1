import moment from 'moment';
import { useEffect,useState } from 'react';
import Card from '../components/Card';
const Weekly = () => {
  const [movies,setMovies]=useState([])
  const toDay=()=>{
    const date=moment().format("YYYY-MM-DD")
    return date;
  }
  const weekAgo=()=>{
    const week=moment().subtract(7, 'd').format("YYYY-MM-DD");
    return week;
  }
  
  const fetchData=async ()=>{
    const request= await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${weekAgo()}&primary_release_date.lte=${toDay()}&api_key=f7e05047484d6ec018591df8216ff84e`)
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
      <Card key={movie.title} movie={movie} movies={movies} stars={movie.vote_average} fetchData={fetchData}/>
    ))}
    </div>
    </>
  )
  }
  
  export default Weekly