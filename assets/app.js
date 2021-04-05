// set current date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm a"));

// get values from local storage
function getDailyInput(){
    var input9 = localStorage.getItem('09am');
    var input10 = localStorage.getItem('10am');
    var input11 = localStorage.getItem('11am');
    var input12 = localStorage.getItem('12pm');
    var input1 = localStorage.getItem('1pm');
    var input2 = localStorage.getItem('2pm');
    var input3 = localStorage.getItem('3pm');
    var input4 = localStorage.getItem('4pm');
    var input5 = localStorage.getItem('5pm');
    var input6 = localStorage.getItem('6pm');
    var input7 = localStorage.getItem('7pm');
    var input8 = localStorage.getItem('8pm');
    var input9pm = localStorage.getItem('9pm');
    var input10pm = localStorage.getItem('10pm');
    var input11pm = localStorage.getItem('11pm');

    $('#txt9').text(input9);
    $('#txt10').text(input10);
    $('#txt11').text(input11);
    $('#txt12').text(input12);
    $('#txt13').text(input1);
    $('#txt14').text(input2);
    $('#txt15').text(input3);
    $('#txt16').text(input4);
    $('#txt17').text(input5);
    $('#txt18').text(input6);
    $('#txt19').text(input7);
    $('#txt20').text(input8);
    $('#txt21').text(input9pm);
    $('#txt22').text(input10pm);
    $('#txt23').text(input11pm);
};
getDailyInput();

// save values to local storage
$('.saveBtn').on('click', function(){
    var input = $(this).siblings('.description').val();
    var time = $(this).siblings('.hour').text();

    localStorage.setItem(time, input);
});

// timeblock color code
var currentTime = moment().hour();
$('.description').addClass('past')

    // if (currentTime === 9) {
    //     $('#txt9').addClass('present');
    // } else if (currentTime < 9) {
    //     $('#txt9').addClass('future');
    // }

    // if (currentTime === 10){
    //     $('#txt10').addClass('present');
    // } else if (currentTime < 10) {
    //     $('#txt10').addClass('future');
    // }

    // if (currentTime === 12) {
    //     $('#txt12').addClass('present');
    // } else if (currentTime < 12) {
    //     $('#txt12').addClass('future');
    // }

    // if (currentTime === 13){
    //     $('#txt1').addClass('present');
    // } else if (currentTime < 13){
    //     $('#txt8').addClass('future');
    // }

    // if (currentTime === 14) {
    //     $('#txt2').addClass('present');
    // } else if (currentTime < 14) {
    //     $('#txt2').addClass('future');
    // }

    // if (currentTime === 15){
    //     $('#txt3').addClass('present');
    // } else if (currentTime < 15) {
    //     $('#txt3').addClass('future');
    // }

    // if (currentTime === 16) {
    //     $('#txt4').addClass('present');
    // } else if (currentTime < 16) {
    //     $('#txt4').addClass('future');
    // }

    // if (currentTime === 17) {
    //     $('#txt5').addClass('present');
    // } else if (currentTime < 17) {
    //     $('#txt5').addClass('future');
    // }

    // if (currentTime === 18) {
    //     $('#txt6').addClass('present');
    // } else if (currentTime < 18){
    //     $('#txt6').addClass('future');
    // }

    // if (currentTime === 19) {
    //     $('#txt7').addClass('present');
    // } else if (currentTime < 19) {
    //     $('#txt7').addClass('future');
    // }

    // if (currentTime === 20){
    //     $('#txt8').addClass('present');
    // } else if (currentTime < 21){
    //     $('#txt8').addClass('future');
    // }

    // if (currentTime === 21){
    //     $('#txt9pm').addClass('present');
    // } else if (currentTime < 21){
    //     $('#txt9pm').addClass('future');
    // }

    // if (currentTime === 22){
    //     $('#txt10pm').addClass('present');
    // } else if (currentTime < 22){
    //     $('#txt10pm').addClass('future');
    // }

    // if (currentTime === 23) {
    //     $('#txt11pm').addClass('present');
    // } else if (currentTime < 23) {
    //     $('#txt11pm').addClass('future');
    // }

    for (var i = 9; i < 24; i++) {
        if (currentTime === i) {
            $('#txt' + i).addClass('present');
        } else if (currentTime < i) {
            $('#txt' + i).addClass('future');
        }
    }