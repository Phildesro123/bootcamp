// Modify anything you like. Remember the content of the program is not important.
// This is just an example to help you practice reading and writing from and to files.
let fs = require('fs');
if(process.argv[2] === '-s' || process.argv[2] === '--stats' ) {
    // console.log("stats requested");
    global.sum = 0;
    sum++;
    fs.writeFile('./log.txt', sum, (err) => {
        if(err) return console.log(err);
    });
} else {
    // console.log("ran at:" + new Date());
    sum++;
    fs.writeFile('./log.txt', new Date(), (err) => {
        if(err) return console.log(err);
    });

    
}
    