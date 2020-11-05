// add curent day and date
$("#currentDay").append(moment().format('dddd, MMMM Do YYYY'));

// row and column size
let time = $("<div>");
time.addClass("col-2");
time.append(time);
$(".row").append(time);

var text = $("<textarea>");
text.addClass("col-7");
text.append(text);
$(".row").append(text);

var button = $("<div>");
button.addClass("col-3");
button.append(button);
$(".row").append(button);

var timeBlock = $("<span>");
timeBlock.addClass("time-block");
timeBlock.append();
$(".col-2").append(timeBlock);

var hour = $("<div>");
hour.addClass("hour");
hour.append(hour);
$(".col-2").append(hour);

var description = $("<div>");
description.addClass("description");
description.append("description");
$(".textarea").append(description);

var saveBtn = $("<button>");
saveBtn.addClass("saveBtn");
saveBtn.append("saveBtn");
$(".col-3").append(saveBtn);