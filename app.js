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
    var input9 = localStorage.getItem('9pm');
    var input10pm = localStorage.getItem('10pm');
    var input11pm = localStorage.getItem('11pm');

    $('#txt9').text(input9);
    $('#txt10').text(input10);
    $('#txt11').text(input11);
    $('#txt12').text(input12);
    $('#txt1').text(input1);
    $('#txt2').text(input2);
    $('#txt3').text(input3);
    $('#txt4').text(input4);
    $('#txt5').text(input5);
    $('#txt6').text(input6);
    $('#txt7').text(input7);
    $('#txt8').text(input8);
    $('#txt9').text(input9);
    $('#txt10pm').text(input10pm);
    $('#txt11pm').text(input11pm);
};
getDailyInput();

// save values to local storage
$('.saveBtn').on('click', function(){
    var input = $(this).siblings('.description').val();
    var time = $(this).siblings('.hour').text();

    localStorage.setItem(time, input);
});