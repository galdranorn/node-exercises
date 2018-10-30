var os = require('os');
var colors = require('colors');

function timeFormat() {
    var uptime = os.uptime();

    // minutes and hours base counting
    var hrs = parseInt(uptime / 3600); // hrs counting
    var scsLeftHrs = (uptime % 3600); // seconds left after hrs counting

    var mins = parseInt(scsLeftHrs / 60); // mins counting
    var secs = parseInt (scsLeftHrs % 60); // seconds left after mins counting

    if (mins > 0) {
        if (hrs > 0) {
            {console.log(`Uptime: ${hrs} hrs ${mins} mins ${secs} secs`)}
        }
        else {
            {console.log(`Uptime: ${mins} mins ${secs} secs`)}
        }
    } 
    else { 
    console.log(`Uptime: ${secs} secs`)
    }
}

exports.timeFormat = timeFormat;