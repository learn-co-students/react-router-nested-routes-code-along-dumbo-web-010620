import React from 'react';
 
const MovieShow = ({match, movies}) => {
 
  return (
    <div>
      {/* <h3>Movies Show Component!</h3> */}
      {/* <h3>{props.routerProps.match.params.movieId}</h3> */}
      <h3>{ movies[match.params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;