var modelEl = $("#project-modal");
var formEl = $("#form");
var nameEl = $("#project-name");
var projectTypeEl = $("#project-type");
var rateEl = $("#hourly-rate");
var dueDateEl = $("#due-date");
var tableDisplayEl = $("#display");

// Date and time on hero banner.
var datetime = null,
  date = null;

var update = function () {
  date = moment(new Date());
  datetime.html(date.format("ddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function () {
  datetime = $("#datetime");
  update();
  setInterval(update, 1000);
});

function projectInfo(name, type, rate, due) {
  var rowEl = $("<tr>");
  var projectNameEl = $("<td>").text(name);
  var projectTypeEl = $("<td>").text(type);
  var projectRateEl = $("<td>").text(rate);
  var projectDueEl = $("<td>").text(due);

  var daysToDue = moment(dueDate, "MM/DD/YYYY").diff(moment(), "days");
  var remainingDays = $("<td>").text(daysToDue);

  var earnings = calculateEarnings(hourlyRate, daysToDue);

  var projectTotalEl = $("<td>").text("$" + earnings);

  var deleteProject = $("<td>").text("X");

  rowEl.append(
    projectNameEl,
    projectTypeEl,
    projectRateEl,
    projectDueEl,
    remainingDays,
    projectTotalEl,
    deleteProject
  );

  tableDisplayEl.append(rowEl);

  modalEl.modal("hide");
}

// Date picker in modal.
$(function () {
  $("#due-date").datepicker({ minDate: 1 });
});
