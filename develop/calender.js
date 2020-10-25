// add curent day and date
$("#currentDay").append(moment().format('dddd, MMMM Do YYYY'));

// rows section
var row = $("<div>");
row.addClass("row");
row.append(row);
$(".container").append(row);

// row and column size
var col1 = $("<div>");
col1.addClass("col-2");
col1.append(col1);
$(".row").append(col1);

var col2 = $("<textarea>");
col2.addClass("col-7");
col2.append(col2);
$(".row").append(col2);

var col3 = $("<div>");
col3.addClass("col-3");
col3.append(col3);
$(".row").append(col3);

var timeBlock = $("<div>");
timeBlock.addClass("time-block");
timeBlock.append(timeBlock);
$(".col-2").append(timeBlock);

var hour = $("<div>");
hour.addClass("hour");
hour.append(hour);
$(".col-2").append(hour);

var description = $("<div>");
description.addClass("description");
description.append(description);
$(".row").append(description);

var saveBtn = $("<button>");
saveBtn.addClass("saveBtn");
saveBtn.append("saveBtn");
$(".col-3").append(saveBtn);