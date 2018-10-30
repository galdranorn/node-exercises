process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // method .read() is reading what user gives as input
    var input = process.stdin.read();

    // if this input is not a null
    if(input !== null) {
    	// define instruction var
    	var instruction = input.toString().trim();
    	// if instruction is exit - quit the app and write it
    	if (instruction==='/exit') {
    		process.stdout.write('Quitting the app...\n');
    		process.exit();
    	}
        // if instruction is not exit - show error
        else {
           process.stdout.write('Wrong command\n');
        }
    }
});