'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let b = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;



console.log(personalMovieDB)