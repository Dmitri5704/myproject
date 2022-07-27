const numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


      for(let i = 0; i<2; i++){
       const  a=prompt("Один из последних просмотренных фильмов", ''),
              b=prompt("Наколько оцените баллов его?", '');
        personalMovieDB.movies[a]=b;
        }
        console.log(personalMovieDB);
       
        

       
      
      
      