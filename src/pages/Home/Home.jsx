import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Container, MoviesContainer, Title, TitleMovie } from "./styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <Container>
      <Title>Melhores filmes</Title>
      <MoviesContainer>
        {topMovies.length === 0 &&  <p>Carregando...</p>} 
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>
        )}
      </MoviesContainer>
    </Container>
  );
};

export default Home;
