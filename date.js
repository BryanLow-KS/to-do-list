
//short way of assigning function to object property
//anonymous function
//exports it same as module.exports (shortcut)
exports.getDate = function(){
  const today = new Date();

  const options = { //customization
    weekday: "long",
    day: "numeric",
    month: "long",
    // year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);
  //according to US English locale (month-day-year order), can check docs
}
//no need () as that will activate the function, and return value
//date in app.js is equal to module.exports, can choose property getDate or getDay
//when requiring this module, the object module.exports will be passed to other files and set to a const

//longer way of assigning function to object property
module.exports.getDay = getDay;

function getDay(){

  const today = new Date();

  const options = { //customization
    weekday: "long",

  };

  return today.toLocaleDateString("en-US", options);
  //according to US English locale (month-day-year order), can check docs

}
//this module exports and has two different functions
//returning date or just a day
