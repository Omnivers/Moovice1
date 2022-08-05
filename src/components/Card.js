function Card(props){
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
  }

  return(
    <div className="card" style={{width: '18rem'}}>
    <img src={`https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`} className="card-img-top" alt={props.title} />
    <div className="card-body">
      <h5 className="card-title">{props.movie.title}</h5>
      <p className='card-text'>Release date: {props.movie.release_date}</p>
      <p className='card-text'>{props.movie.overview}</p>
      <button onClick={addToFavorites}>Add to favorites</button>
    </div>
  </div>
  )}

export default Card;