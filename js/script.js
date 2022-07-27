const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


      for(let i = 0; i<2; i++) {
        const  a=prompt('Один из последних просмотренных фильмов', ''),
               b=prompt('Наколько оцените баллов его?', '');
        personalMovieDB.movies[a]=b;
              if(personalMovieDB.count<10){
                console.log('Мало посмотрел');
              }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
                console.log("Красавчик");
              }else if(personalMovieDB.count>=30){
                console.log("кономан");
              }else{
                 console.log("ошибка");
              }
               
     }
        
        
console.log(personalMovieDB);
              
              
        

       
      
      
     