// Time Param
var totalTime = location.search.split('time=')[1];
var mainTime = totalTime * 60; // Time in minutes (60 = 1 hour)

// Show percent param
var showPercent = location.search.split('percent=')[1].split('&')[0];
if(showPercent == "false") { $(".percent").hide(); }

// Percentage
function percentage(partialValue, totalValue) {
    return Math.floor((100 * partialValue) / totalValue);
}

// Progress bar
function progress(timeleft, timetotal, $element) {
    var percent = percentage(timeleft, timetotal);
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, "linear");
    if(timeleft > -1) {
        setTimeout(function() {
            if(percent < 0) { percent = '0'; }
            progress(timeleft - 1, timetotal, $element);
            $(".percent").html("" + percent + "%</b>");
            if(percent <= 100) {
                $("#progressBar div").addClass("green");
            }
            if(percent < 70) {
                $("#progressBar div").removeClass("green").addClass("orange");
            }
            if(percent < 30) {
                $("#progressBar div").removeClass("orange").addClass("red");
            }
        }, 1000);
    }
};

// Execute progress
progress(mainTime, mainTime, $('#progressBar'));