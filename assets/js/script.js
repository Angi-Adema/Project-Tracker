var modelEl = $("#project-modal");
var formEl = $("#form");
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

  var daysToDue = moment(due, "MM/DD/YYYY").diff(moment(), "days");

  var remainingDays = $("<td>").text(daysToDue);

  var earnings = calculateEarnings(rate, daysToDue);

  var projectTotalEl = $("<td>")
    .addClass("delete-btn")
    .text("$" + earnings);

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

  // modalEl.modal("hide");
}

function calculateEarnings(rate, days) {
  var dailyEarnings = rate * 8;
  var total = dailyEarnings * days;
  return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClick = $(event.target);
  btnClick.parent("tr").remove();
}

function handleProjectSubmit(event) {
  event.preventDefault();

  var projName = $('#project-name').val().trim();
  var projType = $('#project-type').val()
  var hourRate = $("#hourly-rate").val()
  var dateDue = $("#due-date").val()


  projectInfo(projName, projType, hourRate, dateDue);

  formEl[0].reset();
  $('#project-modal').modal('hide')
}

formEl.on("submit", handleProjectSubmit);
tableDisplayEl.on("click", ".delete-btn", handleDeleteProject);

dueDateEl.datepicker({ minDate: 1 });


