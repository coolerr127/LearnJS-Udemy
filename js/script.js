"use strict";

let numberOfFilms;
do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
} while (numberOfFilms == '' || numberOfFilms == null);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

let movie,
    value;

for (let i = 0; i < 2; i++) {
    movie = prompt("Один из последних просмотренных фильмов", '');
    value = prompt("На сколько оцените его?", '');
    if (movie != '' && value != '' && movie != null && value != null && movie.length < 50) {
        personalMovieDB.movies[movie] = value;
    } else {
        i--;
    }
}

console.log(personalMovieDB);