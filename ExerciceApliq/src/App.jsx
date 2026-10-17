import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import {MovieProvider, MovieContext} from './Components/MovieContext';
import { useState, useContext, useEffect } from 'react';
import MovieCard from './Components/MovieCard';

const App=()=>{
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3008/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);


  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/" element={<MovieCard movies={movies} />}/>
           <Route path="/tous" element={<MovieCard movies={movies} />}/> 
           <Route path="/watchlist" element={<WatchList movies={}/>}/>  
           <Route path="/favoris" element={<Favoris/>}/>  
        </Routes>   
      </BrowserRouter> 
      </MovieProvider>
      
  )
}

export default App;