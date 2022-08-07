import { useEffect,useState } from 'react';
import Card from '../components/Card';
import moment from 'moment';

const Home = () => {

  //Variables:
  const [lastMovie,setLastMovie]=useState();
  const [topRatedMovie,setTopRatedMovie]=useState([]);
  const [nowPlaying,setnowPlaying]=useState([]);
  const [upComming,setUpComming]=useState([]);

  // Moment var :
  const tomorrow = moment().add(1, "days").format("YYYY-MM-DD")
  const nextWeek = moment().add(7, "days").format("YYYY-MM-DD")

  // My API adress :
  const API_KEY='f7e05047484d6ec018591df8216ff84e'

  // Fetching fuctions :
  const fetchLastMovie =async()=>{
    const request=await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`)
    const response=await request.json()
    setLastMovie(response)
  }
  const fetchTopRated = async()=>{
    const request=await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    const response=await request.json()
    setTopRatedMovie(response.results) 
  }
  const fetchNowPlaying = async ()=>{
    const request=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
    const response=await request.json()
    setnowPlaying(response.results) 
  }
  const fetchUpComming = async ()=>{
    const request=await fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${tomorrow}&primary_release_date.lte=${nextWeek}&api_key=${API_KEY}`)
    const response=await request.json()
    setUpComming(response.results) 
  }
  // Making all the fetching functions in one for the prop && lisibility
  const fetchData =()=>{
    fetchLastMovie();
    fetchTopRated();
    fetchNowPlaying();
    fetchUpComming();
  }
  // Component did amont for our fetching functions :
  useEffect(()=>{
      fetchData()
      // eslint-disable-next-line
  },[]);

  //Our JSX result :
    return(
    <>
    <h3 className='title'>Latest</h3> 
      <div className="justify-content-center row m-5">
        {lastMovie?(
        <Card movie={lastMovie} stars={lastMovie.vote_average}  fetchData={fetchData}/>
        ):(<h1>Loading</h1>)}
      </div>
    <h3 className='title'>Top Rated</h3>
      <div className="justify-content-center row m-5">
        {topRatedMovie.map(movie => (
            <Card key={movie.title} movie={movie}  stars={movie.vote_average}  fetchData={fetchData}/>
          ))}
      </div>
    <h3 className='title'>Now Playing</h3>
      <div className="justify-content-center row m-5">
          {nowPlaying.map(movie => (
              <Card key={movie.title} movie={movie}  stars={movie.vote_average}  fetchData={fetchData}/>
            ))}
        </div>
    <h3 className='title'>Up comming</h3>
      <div className="justify-content-center row m-5">
            {upComming.map(movie => (
                <Card key={movie.title} movie={movie} fetchData={fetchData}/>
              ))}
          </div>
    </>
    )
  }
  
  export default Home