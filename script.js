"use strict";
const numberOfFilms = +prompt('How many films did we watch?', '');
alert (numberOfFilms);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last watched film',''),
      b = prompt('Give them a note', ''),
      c = prompt('One of the last watched film',''),
      d = prompt('Give them a note', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
