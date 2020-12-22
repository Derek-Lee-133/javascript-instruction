function  timeForMilkAndCookies(date) {
  //  console.log(date.getMonth(), date.getDate());
    let month = date.getMonth();
    let dayOfMonth = date.getDate();

    return month == 11 && dayOfMonth == 24;
}
let result = timeForMilkAndCookies(new Date(2013, 11, 25))
console.log(result);