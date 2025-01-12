// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

    let new_arr = arr.map(element => element.director);
    return new_arr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors(arr) {
  
//     let new_arr= [];
//     new_arr = arr.map(function(element) {
  
//       if(new_arr.includes(element.director)){
//         return new_arr;
//       }
//       else{
//         return element.director;
//       }
  
//     })
//     console.log(new_arr)
//   }
  
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){

    const spielBerg = arr.filter(movie => movie.director === "Steven Spielberg")
  
    const spielBergDrama = spielBerg.filter(movie => movie.genre.includes("Drama"))
  
    return spielBergDrama.length;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){

    if(arr.length === 0){

        return 0
    }
    const rating = arr.reduce((acc , movies) =>{ 
        
        if(movies.rate === undefined || movies.rate === ''){
            return acc
        }
        else{
            return acc + movies.rate
        }
     }, 0);
  
    return Math.round( rating / arr.length *100) / 100;
  }



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr){

  let new_arr = [];
  arr.map(element => {  
    if(element.genre.includes('Drama')){
      return new_arr.push(element)
    }
    return new_arr
  });
  if(new_arr.length === 0){

    return 0
  }
  
  const ratingDrama = new_arr.reduce((acc , movies) =>{ 
    if(movies.rate === undefined || movies.rate === ''){
        return acc
    }
    else{
        return acc + movies.rate
    }
  }, 0)
  return Math.round( ratingDrama / new_arr.length *100) / 100;
}
  


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){

  const copiedArray = [...arr];

  sortedArray = arr.sort(function (a,b){

    if(a.year > b.year) return 1;
    else if( a.year < b.year) return -1;
    else return 0;
  })
  return sortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){

  copiedArray = [...arr]
  const sortedarray = copiedArray.sort(function (a,b) {   
    if(a.title > b.title) return 1;
    else if( a.title < b.title ) return -1;
    else return 0;
  });
  
  const topTwenty = (sortedarray.map((element) => element.title)).slice(0, 20);
  return topTwenty;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
