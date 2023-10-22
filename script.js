
$(document).ready(function() {
  // this function specifies this all to only run when the HTML is fully loaded and the correct conditions are met. 
  // Everything within this function will run on page load 
  
    var save=$(".btn");
    // var for save button

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


  
  function styleHour(){
    var currentHour=dayjs().hour()
    // gets the current hour
    console.log(currentHour)
    $(".time-block").each(function(){
      var perHour=parseInt($(this).attr("id").split("-")[1]);
      // takes the id and splits it into an array (ex.hour, 7) and then splits the array after the "-" and calls for the second entry in the array and parses all of this into a number instead of a string
      console.log(perHour)
      if (perHour===currentHour) {
        $(this).addClass(".present")
      }else if (perHour>currentHour){
        $(this).addClass(".future")
      }else if (perHour<currentHour){
        $(this).addClass(".past")
    }

    })
  }

  styleHour()
// The above code will loop through all time-block elements, compare their associated hour with the current time,
// and change the background color if they match.


     
    

    
  

  
  
  
  
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  
  
  
  
  var today=dayjs();
  $("#currentDay").text(today.format("MMM, DD,YYYY"));
  // this function calls in dayjs and adds the current date to the id "currentDay" with the given format.
}
)