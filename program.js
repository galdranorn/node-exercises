process.stdin.setEncoding('utf-8');
const os = require('os');

process.stdin.on('readable', function() {
    // method .read() is reading what user gives as input
    var input = process.stdin.read();

    // if this input is not a null
    if(input !== null) {
    	// define instruction var
    	var instruction = input.toString().trim();
    	// if instruction is exit - quit the app and write it
    	switch (instruction) {
    		case 'exit':
	    		process.stdout.write('Quitting the app...\n');
	    		process.exit();
    		case 'ver':
    			process.stdout.write(process.versions.node);
    			process.exit();
    		case 'lang':
    			process.stdout.write(process.env.LANG);
    			process.exit();
    		default: 
    			process.stdout.write('Wrong command\n');
    	}	
    }
});