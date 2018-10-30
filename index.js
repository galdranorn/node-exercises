var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();

// if input is not empty
    if(input !== null) {
        var instruction = input.trim();

        switch(instruction) {

            case 'exit':
                process.stdout.write('Quitting app...\n');
                process.exit();
                break;

            case 'sayhello':
                process.stdout.write('Hello!\n');
                break;

            case 'getOSinfo':
                OSinfo.print();
                break;

            // if user writes not mentioned command
            default:
                process.stderr.write('Wrong command\n');
        };
    }
});