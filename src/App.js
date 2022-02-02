import './App.css';
import Header from './components/Header';
import MovieItem from './components/MovieItem';

function App() {
  const title = 'Wild Tacos';

  const alienMovie = {
    title: 'Alien',
    releaseDate: '1979',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore a sapiente perferendis nam magni aspernatur ea molestiae quis, nobis temporibus quaerat reiciendis soluta repudiandae rem voluptas illo laboriosam distinctio?',
    poster: 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY720_.jpg',
    rate: 10,
  };
  const ramboMovie = {
    title: 'Rambo - First Blood',
    releaseDate: '1982',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum atque nemo accusantium distinctio dolore ad fugiat facilis eveniet laboriosam! Error sit perspiciatis voluptatum? Quam architecto inventore ea voluptatem expedita consectetur.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDUwNzEwY2MtMWRlNi00YzBmLWFmOGEtYmY4MjRiZTAzY2NiXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX603_.jpg',
    rate: 9.5,
  };

  const movies = [
    ramboMovie,
    alienMovie,
  ];

  return (
    <div className="App">
      <Header title={title} />
      {
          movies.map((movie) => <MovieItem movie={movie} />)
      }
    </div>
  );
}

export default App;
