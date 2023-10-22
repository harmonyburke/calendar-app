// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



  var save=$(".btn");
  // var for save button
 
$(document).ready(function() {
  // this function specifies this all to only run when the HTML is fully loaded and the correct conditions are met. 
  // Everything within this function will run on page load 

save.on("click", function(){
  // this function runs when the save button is clicked
  console.log("check save button")

  var clickSave=$(this);
  // refers to clicked button
  var timeBlock=clickSave.closest("time-block").attr("id");
  // searches DOM to find the id of the time block where the save button is being clicked.
  var textInput=clickSave.siblings(".description").val();
  // uses ID as a key to save the text input message to local storage
  var message=$(".description")
  // refers to HTML element for the text input 
  localStorage.setItem("timeBlock", textInput);
  console.log(textInput)
  // saves the value inside the specified key in local storage (the input on the specified time block)
  $(".time-block").each(function(){
    var timeID=$(this).attr("id")
    // looks for the id value of the time block in whatever element is being currently worked on 
    var saveMessage=localStorage.getItem(timeBlock);
    var messageEl=$("<li>")

    if (saveMessage){
      // checks to see if saveMessage is being retreived from localStorage. If saveMessage does contain a value(user input) it should save the input to the page 
      $(this).find(".descrpition").val(saveMessage);
      console.log(saveMessage)
      // message.text(timeID.textInput)
      messageEl.addClass("list-group-item").text(textInput);
      messageEl.appendTo(message);
      // this saves the user message to the page, but right now it appends it to all of the decription elements
    }
  })

});


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
    // "hour-7",
    // "hour-8",
    // "hour-9",
    // "hour-10",
    // "hour-11",
    // "hour-12",
    // "hour-13",
    // "hour-14",
    // "hour-15",
    // "hour-16",
    // "hour-17",
    // "hour-18",
    // "hour-19",
    // "hour-20",
    // "hour-21"
    $(".container")
  ]
  var hour=allHours
  
  
  
  for (var i=0; i<allHours.length;i++){
    // loops through all of the hours 

    var currentTime=dayjs();
    console.log(currentTime)
    $("#time").text(currentTime.format("hh:mm a"));
    // adds the time to the top of the page

    // gets the time of day

    if (hour===currentTime) {
      $(".hour").eq(i).toggleClass(".present")
    }else if (hour>currentTime){
      $(".hour").eq(i).toggleClass(".future")
    }else if (hour<currentTime){
      $(".hour").eq(i).toggleClass(".past")
      // checks to see if hour is greater than, less than, or equal to the current time and changes the color based on the answer

    }
  }
// The above code will loop through all time-block elements, compare their associated hour with the current time,
// and change the background color if they match.


     
    

    
  

  
  
  
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  
  
  var timeEl=$("#time")
  var today=dayjs();
  $("#currentDay").text(today.format("MMM, DD,YYYY"));
  // this function calls in dayjs and adds the current date to the id "currentDay" with the given format.
}
)