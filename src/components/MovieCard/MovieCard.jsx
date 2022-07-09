import {Link } from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {Card, MovieTitle, ImgMovie, Average,ButtonDetails} from './styles'
const imageUrl = import.meta.env.VITE_IMG


const MovieCard = ({movie, showLink = true}) => {
    return (
        <Card>
            <ImgMovie src={imageUrl + movie.poster_path} alt={movie.title}/>
            <MovieTitle>{movie.title}</MovieTitle>
            <Average>
                <FaStar/> {movie.vote_average}
            </Average>
            <ButtonDetails>
            {showLink && <Link to={`/movie/${movie.id}`}>MATCH</Link>}
            </ButtonDetails>
        </Card>
    )
}

export default MovieCard;