var os = require('os');
var colors = require('colors');
var timeFormat = require('../modules/timeFormat');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.magenta, cpu);
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.green, userInfo.homedir);
    timeFormat.timeFormat();
}

exports.print = getOSinfo;