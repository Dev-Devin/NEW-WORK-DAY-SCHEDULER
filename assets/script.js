$(document).ready(function () {
    window.setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);