import {Link } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {Card, MovieTitle} from './styles'
const imageUrl = import.meta.env.VITE_IMG


const MovieCard = ({movie, showLink = true}) => {
    return (
        <Card>
            <img src={imageUrl + movie.poster_path} alt={movie.title}/>
            <MovieTitle>{movie.title}</MovieTitle>
            <p>
                <FaStar/> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </Card>
    )
}

export default MovieCard;