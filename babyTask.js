function showMenu()
{
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("menu_click").innerHTML = "you clicked the menu button";
}

function milk_Chat(taskName)
{
  var message = "you clicked the " + taskName + " CHAT button.<br>you can send a message to a group member."
  document.getElementById("milk_alert").innerHTML = message;
}//function milk_Chat

function milk_instantUpdate(taskName)
{
  var prev_time = "test";
  var new_time = new Date();
  var message = "You clicked the INSTANT UPDATE button.<br>" + taskName + " has been updated with the current time."

  //get raw values for time
  var new_hour = new_time.getHours();
  var new_minute = new_time.getMinutes();
  var a_p;

  //modify values for time
  if(new_minute < 10){ new_minute = '0' + new_minute;}

  if(new_hour < 13)
  {
    if(new_hour < 10) {new_hour = '0' + new_hour;}
    a_p = "am";
  }
  else
  {
    new_hour = new_hour - 12;
    a_p = "pm"
  }

  //display the date (ex: Wed Jun 17 2020) and time (ex: 6:07 am)
  document.getElementById("milk_date").innerHTML = new_time.toDateString();
  document.getElementById("milk_time").innerHTML = new_hour + ":" + new_minute + " " + a_p;

  //display the time between the previous and updated times
  //document.getElementById("milk_ago").innerHTML = "ago";
  //milk_displayAgo(prev_time, new_time);

  //display a message
  document.getElementById("milk_alert").innerHTML = message;
}//function milk_instantUpdate

function milk_CustomUpdate(taskName)
{
  var message = "you clicked the " + taskName + " CUSTOM UPDATE button.<br>you can update the task with a custom time."
  document.getElementById("milk_alert").innerHTML = message;
}//function milk_CustomUpdate