import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Triangle from './triangle.js'

$(document).ready(function () {
  $("form#triangles").submit(function (event) {
    event.preventDefault();

    const inputOne = parseInt($("#side1").val());
    const inputTwo = parseInt($("#side2").val());
    const inputThree = parseInt($("#side3").val());

    if (inputOne + inputTwo <= inputThree || inputTwo + inputThree <= inputOne || inputOne + inputThree <= inputTwo) {
      $("#no").show();
    } else if (inputOne === inputTwo && inputOne === inputThree) {
      $("#equal").show();
    } else if (inputOne === inputTwo || inputOne === inputThree || inputTwo === inputThree) {
      $("#iso").show();
    } else if (inputOne != inputTwo && inputOne != inputThree && inputTwo != inputThree) {
      $("#scal").show();
    }
  });
});