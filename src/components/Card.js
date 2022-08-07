import failLoad from '../images/failLoad.png'
import { Link } from 'react-router-dom';

// La ligne 46 concerne l'exercice Moovice sur notion !

function Card({movie,stars,fetchData,fetchFavorites}){
  
  let allFavs=JSON.parse(localStorage.getItem('favoritesIds'));
  if(allFavs===null){
    allFavs=[]
  }// Because if our value equals null we cannot check if it includes a specific ID and we need to check the including in the return.
  
  const addToFavorites=()=>{
    var favoritesIds = [] // Nos IDS Favoris
    var localFavorites=localStorage.getItem('favoritesIds')//On récupére notre base de localStorage
    if(localFavorites){ //Si elle est existance on donne sa valeur à FavoritesIDS
        favoritesIds=JSON.parse(localFavorites)
    }
    if(favoritesIds.includes(movie.id)){ //Si le fav est déjà existant 
        alert('You already have this movie in your favorite list !') 
    }
    else if(!favoritesIds.includes(movie.id)){ //On ajoute notre fav dans notre list
        favoritesIds.push(movie.id)
        localStorage.setItem('favoritesIds',JSON.stringify(favoritesIds))
    }
    return fetchData();
  }

  const removeFav=()=>{ // Setting again the localStorage and passing the fetch to initilise the removed movie
    var localFavorites=JSON.parse(localStorage.getItem('favoritesIds')) 
    if(localFavorites.includes(movie.id)){
    localFavorites.splice(localFavorites.indexOf(movie.id),1)
    localStorage.setItem('favoritesIds',JSON.stringify(localFavorites))
    }
    if(fetchFavorites){
      return fetchFavorites()// We can of course just name fetchFavorite in our Favorites component FetchData.
    }
    if(fetchData){
      return fetchData()
    }// If we're launching the fetchFav function from the Popular page && Weekly && Home.
  }
    
  return(
    
    <div className="card p-0" style={{width: '15rem'}}>
    {movie.poster_path === null ? (
      <>
      <Link to='/Movie'>
      <img src={failLoad} className="card-img-top" alt={movie.title} />
      </Link>
      <div className="cardBody">
        <h5 className="card-titre-none">{movie.title}</h5>
        {/* Pour la formation Konexio on nous a demandé de mettre le release date et la description sur la carte, il suffit de désactiver le commentaire en dessous ! */}
  
        {/* <p className='card-text'>Release date: {movie.release_date}</p> */}
        {/* <p className='card-text'>{movie.overview}</p>    */}

      {allFavs.includes(movie.id)?(
        <button className='remove-btn' onClick={removeFav}>Remove from favorites</button>
      ):(
        <button className='add-btn' onClick={addToFavorites}>Add to favorites</button>
      )}
      </div> 
      </> 
    ):(
      <>
    <Link to={`/Movie/${movie.id}`}>
    <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="card-img-top" alt={movie.title} />
    </Link>
    <div className="cardBody">
      <h5 className="card-titre">{movie.title}</h5>
      {/* <p className='card-text'>Release date: {movie.release_date}</p> */}
      {/* <p className='card-text'>{movie.overview}</p> */}
      {allFavs.includes(movie.id)?(
        <button className='remove-btn' onClick={removeFav}>Remove from favorites</button>
      ):(
        <button className='add-btn' onClick={addToFavorites}>Add to favorites</button>
      )}
      {/* <span className='stars'>{stars}</span> */}
    </div>
    </>
    )}
  </div>
  )}

export default Card;