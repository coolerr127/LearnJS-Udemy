"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

// let movie,
//     value,
//     test,
//     arr;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    let movie = prompt("Один из последних просмотренных фильмов", '');
    let value = prompt("На сколько оцените его?", '');
    personalMovieDB.movies[movie] = value;
}

console.log(personalMovieDB);