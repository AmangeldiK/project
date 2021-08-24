"use strict";

let numberOfFilms

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('Насколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('Насколько оцените его?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememderMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('Насколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
    
        } else {
            console.log('error');
            i--;
        }
    
    }
}

rememderMyFilms();



// let i = 0

// while (i < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('Насколько оцените его?', '');
    

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;

//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }


// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('Насколько оцените его?', '');
    

//     if (a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;

//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while(i < 2);


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов')
    
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 31) {
        console.log('Вы классический зритель');
    
    } else if (personalMovieDB.count > 31){
        console.log('Вы киноман');
    } else {
        console.log('Произошло ошибка')
    };
}

detectPersonalLevel();


// function showMyDB(){
//     if (personalMovieDB.privat === false) {
//         console.log(personalMovieDB)
//     }
// }

// showMyDB();


function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        let myGeners = []
        myGeners = prompt(`Ваш любимый жанр под номером ${i+1}`)
        personalMovieDB.genres.push(myGeners)
    }
}

writeYourGenres();


function showMyDB(){
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
}

showMyDB();











