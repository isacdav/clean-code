interface Movie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}

(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCast(movieId: string) {
    console.log({ movieId });
  }

  function getActorById(actorId: string) {
    console.log({ actorId });
  }

  function movie(movie: Movie) {
    console.log({
      title: movie.title,
      desc: movie.description,
      rate: movie.rating,
      cast: movie.cast,
    });
  }

  function validateActor(fullName: string): boolean {
    if (fullName === 'isaac') return false;
    return true;
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    if (validateActor('david')) return false;

    console.log('Crear actor');
    return true;
  }
})();
