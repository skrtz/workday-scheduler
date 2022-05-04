// set current date
var today = moment();
var currentTime = moment().hour();
let input = [];
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm a"));

// get values from local storage
function getDailyInput(){
    for(let i = 0; i < 15; i++){
        input.push(localStorage.getItem([i]));
        $('#'+ [i]).text(input[i]);
    }
};
getDailyInput();

// save values to local storage
$('.saveBtn').on('click', function(){
    var input = $(this).siblings('.description').val();
    var time = $(this).siblings('.description').attr('id');
    localStorage.setItem(time, input);
});

// timeblock color code
$('.description').addClass('past')
    for (var i = 9; i <= 24; i++) {
        if (currentTime - 9 === i - 9) {
            $('#'+ [i - 9]).addClass('present');
        } else if (currentTime < i) {
            $('#'+ [i - 9]).addClass('future');
        }
    }