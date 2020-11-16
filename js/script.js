"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();
rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();


function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("Один из последних просмотренных фильмов", ''),
            value = prompt("На сколько оцените его?", '');
        if (movie != '' && value != '' && movie != null && value != null && movie.length < 50) {
            personalMovieDB.movies[movie] = value;
        } else {
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        numberOfFilms.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}