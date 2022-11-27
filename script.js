// "use strict"; 

const numberOfFilms = prompt('Cколько фильмов вы уже смотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    boolean: false
};

const a = prompt('Какой последний фильм вы смотрели?', ''),
         b = prompt('На сколько оцените его?', ''),
         c = prompt('Какой последний фильм вы смотрели?', ''),
         d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);