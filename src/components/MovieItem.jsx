import './MovieItem.css';

function MovieItem(props) {
    const movie = props.movie;

    return (
        <ul className="MovieItem">
            <li>{movie.title}</li>
            <li>{movie.releaseDate}</li>
            <li>{movie.description}</li>
            <li><img src={movie.poster} alt={movie.title} /></li>
            <li>{movie.rate}</li>
        </ul>
    )
}

export default MovieItem;