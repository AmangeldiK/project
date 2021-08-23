"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

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


if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов')

} else if(personalMovieDB.count > 10 && personalMovieDB.count < 31) {
    console.log('Вы классический зритель');

} else if (personalMovieDB.count > 31){
    console.log('Вы киноман');
} else {
    console.log.log('Произошло ошибка')
};

console.log(personalMovieDB)










