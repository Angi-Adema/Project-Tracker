// var time = moment().format('hh:mm:ss');
// $('#time').text(time);

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('ddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function() {
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});