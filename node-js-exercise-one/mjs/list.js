import fs from 'node:fs';

fs.readdir("node-js-exercise-one/mjs/", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.forEach(file => {console.log("", file);});
})