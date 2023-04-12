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

// Date picker in modal.
$(function () {
  $("#due-date").datepicker({ minDate: 1 });
});
