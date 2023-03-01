function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { 
      day = 7;
    }
  
    return day;
}

let date = new Date(2012, 0, 3); 
console.log( getLocalDay(date) ); 

let today = new Date(2023, 2, 1);
console.log( getLocalDay(today) );