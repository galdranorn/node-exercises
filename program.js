process.stdin.setEncoding('utf-8');

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
    		default: 
    			process.stdout.write('Wrong command\n');
    	}	
        // if instruction is not exit - show error
        //else {
        //   process.stderr.write('Wrong command\n');
        //}
    }
});