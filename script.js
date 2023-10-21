// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



  var save=$(".btn");
  // var for save button
  var message=$(".description")
  // var to call the HTML element for the text box
  


save.on("click", function(){
  // this function runs when the save button is clicked
  console.log("check save button")
  localStorage.setItem("message", JSON.stringify(message))
  console.log(userNote)

})

function saveMessage(){
  var userNote=JSON.parse(localStorage.getItem("message"));
  if (userNote===message){
    message.text($.attr("message"))
  }
 
  
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  var allHours = [
    // array for all the hour slots
    "hour-7",
    "hour-8",
    "hour-9",
    "hour-10",
    "hour-11",
    "hour-12",
    "hour-13",
    "hour-14",
    "hour-15",
    "hour-16",
    "hour-17",
    "hour-18",
    "hour-19",
    "hour-20",
    "hour-21"

  ]
  var hour=0
  var hourEl=$(".container");
  
  var past=$(".past");
  var present=$(".present")
  var future=$(".future")
  for (var i=0; i<allHours.length;i++){
    // loops through all of the hours in military time

    var currentTime=dayjs();
    console.log(currentTime)
    $("#time").text(currentTime.format("hh:mm a"));

    // gets the time of day

    if (hour===currentTime){
      $(".container").css({ 'background-color': 'orange' });
 

// The above code will loop through all time-block elements, compare their associated hour with the current time,
// and change the background color if they match.


     
    }

    
  

  
  
  
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  
  
  var timeEl=$("#time")
  var today=dayjs();
  $("#currentDay").text(today.format("MMM, DD,YYYY"));
  // this function calls in dayjs and adds the current date to the id "currentDay" with the given format.
  
};

