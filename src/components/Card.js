import failLoad from '../images/failLoad.png'
function Card(props){
  let allFavs=JSON.parse(localStorage.getItem('favoritesIds'));
  const addToFavorites=()=>{
    var favoritesIds = [] // Nos IDS Favoris
    var localFavorites=localStorage.getItem('favoritesIds')//On récupére notre base de localStorage
    if(localFavorites){ //Si elle est existance on donne sa valeur à FavoritesIDS
        favoritesIds=JSON.parse(localFavorites)
    }
    if(favoritesIds.includes(props.movie.id)){ //Si le fav est déjà existant 
        alert('You already have this movie in your favorite list !') 
    }
    else if(!favoritesIds.includes(props.movie.id)){ //On ajoute notre fav dans notre list
        favoritesIds.push(props.movie.id)
        localStorage.setItem('favoritesIds',JSON.stringify(favoritesIds))
    }
    props.fetchData()
  }

  const removeFav=()=>{ // Setting again the localStorage and passing the fetch to initilise the removed movie
    var localFavorites=JSON.parse(localStorage.getItem('favoritesIds')) 
    if(localFavorites.includes(props.movie.id)){
    localFavorites.splice(localFavorites.indexOf(props.movie.id),1)
    localStorage.setItem('favoritesIds',JSON.stringify(localFavorites))
    }
    props.fetchData()
    props.fetchFavorites() // Error is not a function insolved yet ! tryed method : (import { PropTypes } from "react";)
  }
    
  return(
    <div className="card p-0" style={{width: '15rem'}}>
    {props.movie.poster_path === null ? (
      <>
      <img src={failLoad} className="card-img-top" alt={props.title} />
      <div className="cardBody">
        <h5 className="card-titre-none">{props.movie.title}</h5>
        {/* <p className='card-text'>Release date: {props.movie.release_date}</p> */}
        {/* <p className='card-text'>{props.movie.overview}</p> */}
      {allFavs.includes(props.movie.id)?(
        <button className='remove-btn' onClick={removeFav}>Remove from favorites</button>
      ):(
        <button className='add-btn' onClick={addToFavorites}>Add to favorites</button>
      )}
      </div> 
      </> 
    ):(
      <>
    <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} className="card-img-top" alt={props.title} />
    <div className="cardBody">
      <h5 className="card-titre">{props.movie.title}</h5>
      {/* <p className='card-text'>Release date: {props.movie.release_date}</p> */}
      {/* <p className='card-text'>{props.movie.overview}</p> */}
      {allFavs.includes(props.movie.id)?(
        <button className='remove-btn' onClick={removeFav}>Remove from favorites</button>
      ):(
        <button className='add-btn' onClick={addToFavorites}>Add to favorites</button>
      )}
      {/* <span className='stars'>{props.stars}</span> */}
    </div>
    </>
    )}
  </div>
  )}

export default Card;