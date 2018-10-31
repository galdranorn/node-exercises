var fs = require('fs');
var colors = require('colors');

// old function for files

/* fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Data before changes'.blue);
    console.log(data);
    fs.appendFile('./text.txt', 'There is some another text', function(err) {
        if (err) throw err;
        console.log('Okay!'.green);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Data after saving'.blue);
            console.log(data);
        });
    });
}); */



// new function for folder

fs.readdir('./testFolder', function (err, data) {
    console.log('Folders content was read'.cyan);
    fs.writeFile('./testFolder/generatedFile.txt', data, function(){
        console.log('Success! File was saved.'.green);
    })
})