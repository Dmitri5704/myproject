let numberOfFilms ;
function start(){
        numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
    

while(numberOfFilms =='' || numberOfFilms == null ||isNaN(numberOfFilms)){
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?", "");
}
}
start();
    
    const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actosr:{},
    genres:[],
    privat:false
};

   
       function rememberMyFilms(){ 
            for(let i = 0; i<2; i++){
            const  a=prompt("Один из последних просмотренных фильмов", ''),
                 b=prompt("Наколько оцените баллов его?", '');
             personalMovieDB[a]=b;
                }
        }
        
       // rememberMyFilms();


        
       
function detectPersonalLevel(){
 if(personalMovieDB.count<10){
            console.log('Мало посмотрел');
          }else if(personalMovieDB.count>=10 && personalMovieDB.count<30){
            console.log("Красавчик");
          }else if(personalMovieDB.count>=30){
           console.log("кономан");
          }else{
            // console.log("ошибка");
    
}
}
//detectPersonalLevel();

function showMyDB(hidden){
if(!hidden){
    console.log(personalMovieDB);
}
}   

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for( let i=1;i<=3;i++){
        const genre=prompt("Ваш любимый жанр под номером ${i}");
        personalMovieDB.genres[i-1]=genre;

    }
}

writeYourGenres();

    
        

       
      
      
     