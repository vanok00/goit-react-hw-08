import { useEffect, useState } from "react";
import fetchTrendMovies from "../../services/api";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const getTrendMovies = async () => {
      const movies = await fetchTrendMovies();
      setTrendMovies(movies);
    };
    getTrendMovies();
  }, []);

  return (
    <div>
      <h1>PhoneBook</h1>
    </div>
  );
};

export default HomePage;
